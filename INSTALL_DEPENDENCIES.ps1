# PowerShell script to install dependencies

Write-Host "Installing dependencies for OM Muruga Hostel Website..." -ForegroundColor Green
Write-Host ""
Write-Host "This will install:" -ForegroundColor Yellow
Write-Host "- react-icons" -ForegroundColor Cyan
Write-Host "- All other dependencies" -ForegroundColor Cyan
Write-Host ""

# Run npm install
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Installation complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Now you can run: npm run dev" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Installation failed. Please check the error messages above." -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
