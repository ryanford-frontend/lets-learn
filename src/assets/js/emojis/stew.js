import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M13.037 34.816C.794 33.013 1 20.719 1 17h34c0 1.914.087 15.77-13.125 17.918-2.042.332-6.458.249-8.838-.102z", {["fill"]: "#292F33",["d"]: "M13.037 34.816C.794 33.013 1 20.719 1 17h34c0 1.914.087 15.77-13.125 17.918-2.042.332-6.458.249-8.838-.102z",}));el.appendChild(svg["path"]("M33.388 13.247c2.467-5.574-8.331-5.254-11.035-4.382-1.392-.162-2.846-.254-4.353-.254-9.389 0-17 3.228-17 8.444 0 1.009.291 1.979.818 2.891-4.327 5.712 4.246 6.786 9.184 5.71 2.136.537 4.5.844 6.998.844 9.389 0 17-4.229 17-9.444 0-1.43-.589-2.704-1.612-3.809z", {["fill"]: "#66757F",["d"]: "M33.388 13.247c2.467-5.574-8.331-5.254-11.035-4.382-1.392-.162-2.846-.254-4.353-.254-9.389 0-17 3.228-17 8.444 0 1.009.291 1.979.818 2.891-4.327 5.712 4.246 6.786 9.184 5.71 2.136.537 4.5.844 6.998.844 9.389 0 17-4.229 17-9.444 0-1.43-.589-2.704-1.612-3.809z",}));el.appendChild(svg["ellipse"](18, 18, 30, 14, {["rx"]: "15",["cy"]: "18",["ry"]: "7",["fill"]: "#FFCC4D",["cx"]: "18",}));el.appendChild(svg["path"]("M4 16c-.542-2.169 2-6 7-5 1-1 2.838-2 6-2 2 0 5.612 1.775 4 5-1 2-5 5-10 3-1 1-6 3-7-1z", {["fill"]: "#77B255",["d"]: "M4 16c-.542-2.169 2-6 7-5 1-1 2.838-2 6-2 2 0 5.612 1.775 4 5-1 2-5 5-10 3-1 1-6 3-7-1z",}));el.appendChild(svg["path"]("M12 17c-.249.036-.471.073-.678.111C16.17 18.857 20.022 15.956 21 14c1.078-2.156-.181-3.66-1.731-4.423.394 1.822-1.128 6.546-7.269 7.423z", {["fill"]: "#5C913B",["d"]: "M12 17c-.249.036-.471.073-.678.111C16.17 18.857 20.022 15.956 21 14c1.078-2.156-.181-3.66-1.731-4.423.394 1.822-1.128 6.546-7.269 7.423z",}));el.appendChild(svg["path"]("M5 16c.525-1.313 5-3 10 3 1 1 4.586 1.586 6 3 1 1 0 2-4 2S3 21 5 16z", {["fill"]: "#D99E82",["d"]: "M5 16c.525-1.313 5-3 10 3 1 1 4.586 1.586 6 3 1 1 0 2-4 2S3 21 5 16z",}));el.appendChild(svg["path"]("M6.041 20.018C8.589 22.561 14.231 24 17 24c4 0 5-1 4-2-.326-.326-.77-.607-1.268-.86-3.204 1.733-11.68-.144-13.691-1.122z", {["fill"]: "#B27962",["d"]: "M6.041 20.018C8.589 22.561 14.231 24 17 24c4 0 5-1 4-2-.326-.326-.77-.607-1.268-.86-3.204 1.733-11.68-.144-13.691-1.122z",}));el.appendChild(svg["path"]("M27 19.001c-.209 0-.423-.034-.633-.104l-3-1c-1.048-.35-1.614-1.482-1.265-2.53.349-1.047 1.479-1.614 2.53-1.265l3 1c1.048.35 1.614 1.482 1.265 2.53-.279.839-1.059 1.369-1.897 1.369zM26 22h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#FFE8B6",["d"]: "M27 19.001c-.209 0-.423-.034-.633-.104l-3-1c-1.048-.35-1.614-1.482-1.265-2.53.349-1.047 1.479-1.614 2.53-1.265l3 1c1.048.35 1.614 1.482 1.265 2.53-.279.839-1.059 1.369-1.897 1.369zM26 22h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};