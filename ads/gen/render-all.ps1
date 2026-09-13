# Renders every page in build/ to ../applovin-1080/<line>/<concept>/vNN.png
# Usage: .\render-all.ps1            (all 200)
#        .\render-all.ps1 -Filter thc-04   (substring match on file name)
param([string]$Filter = "", [int]$Parallel = 6)

$gen    = $PSScriptRoot
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outRoot = Join-Path (Split-Path $gen -Parent) "applovin-1080"

$pages = Get-ChildItem "$gen\build\*.html" | Where-Object { -not $Filter -or $_.Name -like "*$Filter*" } | Sort-Object Name
Write-Output ("rendering {0} pages, {1} at a time" -f $pages.Count, $Parallel)
$sw = [Diagnostics.Stopwatch]::StartNew()

$pages | ForEach-Object -ThrottleLimit $Parallel -Parallel {
  $f = $_
  # sleep-03-prepper-v04  ->  line=sleep  concept=03-prepper  v=04
  if ($f.BaseName -match '^(sleep|thc)-(.+)-v(\d\d)$') {
    $dir = Join-Path $using:outRoot "$($Matches[1])\$($Matches[2])"
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    $png = Join-Path $dir "v$($Matches[3]).png"
    $url = "file:///" + ($f.FullName -replace '\\','/')
    $tmpProfile = Join-Path $env:TEMP ("chrome-ad-" + [guid]::NewGuid().ToString('N').Substring(0,8))
    & $using:chrome --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1080,1080 `
      --virtual-time-budget=5000 --allow-file-access-from-files --user-data-dir="$tmpProfile" --screenshot="$png" $url 2>$null | Out-Null
    Remove-Item -Recurse -Force $tmpProfile -ErrorAction SilentlyContinue
    if (-not (Test-Path $png)) { "!! FAILED $($f.BaseName)" }
  }
}

$made = (Get-ChildItem $outRoot -Recurse -Filter "v*.png").Count
Write-Output ("done: {0} PNGs in {1:N0}s" -f $made, $sw.Elapsed.TotalSeconds)
