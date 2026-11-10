#!/bin/sh
set -e
cd "$(dirname "$0")"
A=../app
mkdir -p shell/ocr/core shell/ocr/lang
cp $A/node_modules/tesseract.js/dist/tesseract.min.js $A/node_modules/tesseract.js/dist/worker.min.js shell/ocr/
for v in tesseract-core-lstm tesseract-core-simd-lstm tesseract-core-relaxedsimd-lstm; do cp $A/node_modules/tesseract.js-core/$v.wasm.js shell/ocr/core/; done
cp $A/ocr/*.traineddata shell/ocr/lang/
cp $A/src/assets/logo.png icons/tray.png
echo ok
