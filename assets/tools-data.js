
const TOOLS_ALL = [
  // PDF
  {id:'merge', title:'Merge PDF', desc:'Combine multiple PDFs into one file', icon:'bi-file-earmark-pdf-fill', cat:'pdf', href:'tools/merge.html'},
  {id:'split', title:'Split PDF', desc:'Split PDF into page ranges', icon:'bi-file-earmark-break-fill', cat:'pdf', href:'tools/split.html'},
  {id:'compress', title:'Compress PDF', desc:'Reduce PDF size (client-side heuristic)', icon:'bi-arrow-down-circle-fill', cat:'pdf', href:'tools/compress.html'},
  {id:'text2pdf', title:'Text → PDF', desc:'Create PDF from typed text', icon:'bi-file-text-fill', cat:'text', href:'tools/text2pdf.html'},
  {id:'img2pdf', title:'Image → PDF', desc:'Convert images to a single PDF', icon:'bi-image-fill', cat:'image', href:'tools/img2pdf.html'},

  // Images
  {id:'imgcompress', title:'Image Compressor', desc:'Compress JPG/PNG using canvas', icon:'bi-image', cat:'image', href:'tools/imgcompress.html'},
  {id:'imgresize', title:'Image Resizer', desc:'Resize images using canvas', icon:'bi-aspect-ratio', cat:'image', href:'tools/imgresize.html'},
  {id:'imgcrop', title:'Image Cropper', desc:'Crop an image to custom size', icon:'bi-crop', cat:'image', href:'tools/imgcrop.html'},
  {id:'imgflip', title:'Image Flipper', desc:'Flip image horizontally/vertically', icon:'bi-arrow-left-right', cat:'image', href:'tools/imgflip.html'},

  // Text
  {id:'texteditor', title:'Text Editor', desc:'Simple text editor with download', icon:'bi-pencil-square', cat:'text', href:'tools/texteditor.html'},

  // Dev
  {id:'qrcode', title:'QR Code Generator', desc:'Generate and download QR codes', icon:'bi-qr-code', cat:'dev', href:'tools/qrcode.html'},

  // General
  {id:'counter', title:'Counter', desc:'Simple increment / decrement counter', icon:'bi-plus-slash-minus', cat:'general', href:'tools/counter.html'},
  {id:'countdown', title:'Countdown', desc:'Countdown timer', icon:'bi-hourglass-split', cat:'general', href:'tools/countdown.html'},
  {id:'stopwatch', title:'Stopwatch', desc:'Start/stop/reset stopwatch', icon:'bi-stopwatch', cat:'general', href:'tools/stopwatch.html'},
  {id:'roman', title:'Number → Roman', desc:'Convert numbers to Roman numerals', icon:'bi-list-ol', cat:'general', href:'tools/roman.html'},

  // Calculators
  {id:'calc', title:'Calculator', desc:'Simple calculator', icon:'bi-calculator', cat:'calc', href:'tools/calc.html'},
  {id:'agecalc', title:'Age Calculator', desc:'Calculate age from DOB', icon:'bi-person-lines-fill', cat:'calc', href:'tools/age.html'},
  {id:'percent', title:'Percentage Calculator', desc:'Find percent, increase/decrease', icon:'bi-percent', cat:'calc', href:'tools/percent.html'},

  // Unit Converters
  {id:'currency', title:'Currency Converter', desc:'Offline demo rates (editable)', icon:'bi-currency-exchange', cat:'convert', href:'tools/currency.html'},
  {id:'energy', title:'Energy Converter', desc:'Joule ↔ Calorie ↔ kWh', icon:'bi-lightning-charge', cat:'convert', href:'tools/energy.html'},
  {id:'area', title:'Area Converter', desc:'m² ↔ ft² ↔ acre ↔ hectare', icon:'bi-aspect-ratio', cat:'convert', href:'tools/area.html'},
  {id:'length', title:'Length Converter', desc:'m ↔ km ↔ mile ↔ ft ↔ in', icon:'bi-rulers', cat:'convert', href:'tools/length.html'},
  {id:'volume', title:'Volume Converter', desc:'L ↔ mL ↔ gal ↔ qt', icon:'bi-droplet', cat:'convert', href:'tools/volume.html'},
  {id:'voltage', title:'Voltage Converter', desc:'V ↔ kV ↔ mV', icon:'bi-battery-charging', cat:'convert', href:'tools/voltage.html'},
  {id:'speed', title:'Speed Converter', desc:'m/s ↔ km/h ↔ mph ↔ kt', icon:'bi-speedometer', cat:'convert', href:'tools/speed.html'},

  // Health
  {id:'bmi', title:'BMI Calculator', desc:'Body Mass Index', icon:'bi-activity', cat:'health', href:'tools/bmi.html'},
  {id:'water', title:'Water Intake', desc:'Daily water need estimate', icon:'bi-droplet-half', cat:'health', href:'tools/water.html'},
  {id:'ideal', title:'Ideal Weight', desc:'Devine/Robinson formulas', icon:'bi-body-text', cat:'health', href:'tools/idealweight.html'},
  {id:'bmr', title:'BMR Calculator', desc:'Mifflin–St Jeor', icon:'bi-fire', cat:'health', href:'tools/bmr.html'}
];
