$content = Get-Content -Path 'coba.html' -Raw
$regex = [regex]::new("desc: '(.*?)'", [System.Text.RegularExpressions.RegexOptions]::Singleline)
$content = $regex.Replace($content, 'desc: `$1')
Set-Content -Path 'coba.html' -Value $content
Write-Host "Fixed"
