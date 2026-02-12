@echo off
echo ========================================
echo   PUSHING CODE TO GITHUB
echo ========================================
echo.

REM Initialize git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add remote repository
echo Setting up remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Gunalan183/OM-Muruga-Men-s-Hostel.git
echo.

REM Add all files
echo Adding all files...
git add .
echo.

REM Commit changes
echo Committing changes...
git commit -m "Initial commit: OM Muruga Men's Hostel website"
echo.

REM Push to GitHub
echo Pushing to GitHub...
git branch -M main
git push -u origin main
echo.

echo ========================================
echo   PUSH COMPLETE!
echo ========================================
echo.
echo Your code has been pushed to:
echo https://github.com/Gunalan183/OM-Muruga-Men-s-Hostel
echo.
pause
