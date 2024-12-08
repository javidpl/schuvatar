import './style.css'
import { gsap } from 'gsap'
import { SVG } from '@svgdotjs/svg.js'	

const $head_sliders = document.querySelectorAll('.head_slider');

const canvas_w = 500;
const canvas_h = 500;

const draw = SVG().addTo(document.querySelector('.canvas_wrap')).size(canvas_w, canvas_h);
// const head = draw.rect(100, 100).fill('#fa0').attr({ rx: 25, ry: 25}).move(200, 200);

const path = function (w_up, w_down, h, tr, br) {
  
  const diff = (w_up - w_down) / 2; // Offset for centering the bottom width
  return (
    'M 0 ' + tr + // Top-left corner
  ' A ' + tr + ' ' + tr + ' 0 0 1 ' + tr + ' 0' + // Rounded top-left corner
  ' L ' + (w_up - tr) + ' 0' + // Top edge
  ' A ' + tr + ' ' + tr + ' 0 0 1 ' + w_up + ' ' + tr + // Rounded top-right corner
  ' L ' + (w_down  + diff) + ' ' + (h - br) + // Bottom-right edge
  // ' A ' + br + ' ' + br + ' 0 0 1 ' + w_down + ' ' + h  + // Rounded bottom-right corner
  ' A ' + br + ' ' + br + ' 0 0 1 ' + (w_down - br + diff) + ' ' + h + // Rounded bottom-right corner
  ' L ' + (br + diff) + ' ' + h + // Bottom-left edge
  ' A ' + br + ' ' + br + ' 0 0 1' + diff + ' ' + (h - br) + // Rounded bottom-left corner
  ' Z'
  );
};
const polyhead = draw.path(path(100, 100, 100, 25, 25)).fill('#fa0').center(canvas_w / 2, canvas_h / 2);




// Head sliders
$head_sliders.forEach(slider => {
  slider.addEventListener('input', function(e) {
    const width_top_val = parseInt(document.querySelector('#h_width_top_sld').value);
    const width_bottom_val = parseInt(document.querySelector('#h_width_bottom_sld').value);
    const round_top_val = parseInt(document.querySelector('#h_round_top_sld').value);
    const round_bottom_val = parseInt(document.querySelector('#h_round_bottom_sld').value);
    
    console.log(width_top_val);
    polyhead.plot(path(width_top_val, width_bottom_val, 100, round_top_val, round_bottom_val))
      .center(canvas_w / 2, canvas_h / 2);
  });
});



