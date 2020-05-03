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
				el.appendChild(svg["path"]("M35.779 21.787c-.04-.159-.943-3.684-3.443-7.198-.104-.262-.224-.527-.362-.797C30.067 10.078 29.531 3 26.602 3s-1.859 4.279-4.722 4.279S19.804 3 16.645 3c-3.16 0-3.452 7.065-5.295 10.184-.029.049-.054.102-.082.151-.26-.517-.275-1.026-.26-1.535.015-.516-.316-2.081-1.256-3.361.685-.129 1.184-.563 1.156-1.05-.032-.551-.729-.96-1.556-.911-.535.031-.99.246-1.238.542-.293-.146-.61-.263-.957-.335-.554-.116-.539.911-3.029.911-2.49 0-4.133 3.998-1.849 3.998s4.388-.113 4.701 1.088c.29 1.119-.587 3.537-.147 4.997.379 1.261 1.088 2.283 1.927 3.11 1.934 2.086 3.746 10.069 3.687 12.062-.059 1.999 1.94 2.058 1.999.059.036-1.212-.102-4.05.144-6.44.658 3.122.934 6.755.898 7.973-.059 1.999 1.94 2.058 1.999.059.048-1.621-.19-7.14.585-9.989.509.024 1.04.037 1.593.042 1.564.079 3.262-.17 4.855-.564 1.273 2.243 2.649 4.45 2.633 4.985-.029 1-1.117 3.969-1.146 4.969-.029.999.94 2.028 1.999.059.554-1.029 1.125-3.066 1.414-5.067.634 1.113 1.092 1.984 1.083 2.294-.029 1-1.064 2.124-1.093 3.124-.029.999.94 2.028 1.999.059 1.059-1.97 2.092-3.094 1.151-5.122-.719-1.551-.817-6.551-.354-9.706.126-.235.229-.482.319-.735.928 1.929 1.309 3.401 1.314 3.425.114.454.521.757.969.757.081 0 .163-.01.244-.03.536-.139.861-.681.727-1.216z", {["fill"]: "#C1694F",["d"]: "M35.779 21.787c-.04-.159-.943-3.684-3.443-7.198-.104-.262-.224-.527-.362-.797C30.067 10.078 29.531 3 26.602 3s-1.859 4.279-4.722 4.279S19.804 3 16.645 3c-3.16 0-3.452 7.065-5.295 10.184-.029.049-.054.102-.082.151-.26-.517-.275-1.026-.26-1.535.015-.516-.316-2.081-1.256-3.361.685-.129 1.184-.563 1.156-1.05-.032-.551-.729-.96-1.556-.911-.535.031-.99.246-1.238.542-.293-.146-.61-.263-.957-.335-.554-.116-.539.911-3.029.911-2.49 0-4.133 3.998-1.849 3.998s4.388-.113 4.701 1.088c.29 1.119-.587 3.537-.147 4.997.379 1.261 1.088 2.283 1.927 3.11 1.934 2.086 3.746 10.069 3.687 12.062-.059 1.999 1.94 2.058 1.999.059.036-1.212-.102-4.05.144-6.44.658 3.122.934 6.755.898 7.973-.059 1.999 1.94 2.058 1.999.059.048-1.621-.19-7.14.585-9.989.509.024 1.04.037 1.593.042 1.564.079 3.262-.17 4.855-.564 1.273 2.243 2.649 4.45 2.633 4.985-.029 1-1.117 3.969-1.146 4.969-.029.999.94 2.028 1.999.059.554-1.029 1.125-3.066 1.414-5.067.634 1.113 1.092 1.984 1.083 2.294-.029 1-1.064 2.124-1.093 3.124-.029.999.94 2.028 1.999.059 1.059-1.97 2.092-3.094 1.151-5.122-.719-1.551-.817-6.551-.354-9.706.126-.235.229-.482.319-.735.928 1.929 1.309 3.401 1.314 3.425.114.454.521.757.969.757.081 0 .163-.01.244-.03.536-.139.861-.681.727-1.216z",}));el.appendChild(svg["path"]("M8.097 8.713c-.016.552-.477.987-1.029.97-.552-.016-.986-.477-.97-1.029.016-.552.477-.986 1.029-.97.552.017.987.477.97 1.029z", {["fill"]: "#292F33",["d"]: "M8.097 8.713c-.016.552-.477.987-1.029.97-.552-.016-.986-.477-.97-1.029.016-.552.477-.986 1.029-.97.552.017.987.477.97 1.029z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};