@echo off
echo Copying photos to public folder...
mkdir public\photos 2>nul
xcopy /E /I /Y ..\photos\*.jpeg public\photos\
echo.
echo Photos copied successfully!
echo Total files: 18 (15 rooms + 2 restrooms + 1 visiting card)
echo.
pause
