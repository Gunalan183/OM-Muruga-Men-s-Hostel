@echo off
echo ========================================
echo   COPYING PHOTOS TO PUBLIC FOLDER
echo ========================================
echo.

REM Create the photos directory
if not exist "public\photos" (
    mkdir "public\photos"
    echo Created public\photos directory
) else (
    echo public\photos directory already exists
)

echo.
echo Copying photos from parent directory...
echo.

REM Copy all jpeg files from parent photos folder
copy "..\photos\*.jpeg" "public\photos\" /Y

echo.
echo ========================================
echo   COPY COMPLETE!
echo ========================================
echo.

REM List the copied files
echo Files in public\photos:
dir "public\photos\*.jpeg" /B

echo.
echo Total files copied:
dir "public\photos\*.jpeg" /B | find /c /v ""

echo.
echo ========================================
echo Press any key to close...
pause >nul
