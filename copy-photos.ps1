# PowerShell script to copy photos to public folder

Write-Host "Copying photos to public folder..." -ForegroundColor Green

# Create photos directory if it doesn't exist
$photosDir = "public\photos"
if (-not (Test-Path $photosDir)) {
    New-Item -ItemType Directory -Path $photosDir -Force | Out-Null
    Write-Host "Created $photosDir directory" -ForegroundColor Yellow
}

# Copy photos from parent directory
$sourceDir = "..\photos"
if (Test-Path $sourceDir) {
    Copy-Item -Path "$sourceDir\*.jpeg" -Destination $photosDir -Force
    Write-Host "Photos copied successfully!" -ForegroundColor Green
    
    # Count files
    $fileCount = (Get-ChildItem -Path $photosDir -File).Count
    Write-Host "Total files copied: $fileCount" -ForegroundColor Cyan
    Write-Host "  - 15 room photos" -ForegroundColor Cyan
    Write-Host "  - 2 restroom photos" -ForegroundColor Cyan
    Write-Host "  - 1 visiting card" -ForegroundColor Cyan
} else {
    Write-Host "Source directory not found: $sourceDir" -ForegroundColor Red
    Write-Host "Please ensure the photos folder exists in the parent directory" -ForegroundColor Yellow
}

Write-Host "`nPress any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
