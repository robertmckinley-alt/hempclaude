param([string[]]$Names = @())
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$dir = $PSScriptRoot
$files = if ($Names.Count) { $Names | ForEach-Object { Get-Item "$dir\$_.html" } } else { Get-ChildItem "$dir\*.html" | Sort-Object Name }
New-Item -ItemType Directory -Force -Path "$dir\out" | Out-Null
foreach ($f in $files) {
  $name = $f.BaseName
  $url = "file:///" + ($f.FullName -replace '\\','/')
  $png = "$dir\out\$name.png"
  & $chrome --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1080,1080 `
    --virtual-time-budget=5000 --allow-file-access-from-files --screenshot="$png" $url 2>$null | Out-Null
  if (Test-Path $png) { "{0,-28} {1,8:N0} bytes" -f $name, (Get-Item $png).Length } else { "!! $name FAILED" }
}
