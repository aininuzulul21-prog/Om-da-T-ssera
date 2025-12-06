$content = Get-Content coba.html -Raw
$content = $content -replace 'desc: `([^`]*)},', 'desc: `$1`},'
$content | Out-File coba.html -Encoding UTF8
Write-Host "Fixed"
