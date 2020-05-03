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
				el.appendChild(svg["path"]("M4 31h28c.702 0 1.361-.182 1.935-.5H2.065c.574.318 1.233.5 1.935.5z", {["fill"]: "#0D5EB0",["d"]: "M4 31h28c.702 0 1.361-.182 1.935-.5H2.065c.574.318 1.233.5 1.935.5z",}));el.appendChild(svg["path"]("M8.5 19.5H0V22h36v-2.5H14zM0 27c0 .17.014.336.035.5h35.931c.02-.164.034-.33.034-.5v-2H0v2zm14-13h22v2.5H14zm0-5.5V11h22V9c0-.17-.014-.336-.035-.5H14z", {["fill"]: "#EEE",["d"]: "M8.5 19.5H0V22h36v-2.5H14zM0 27c0 .17.014.336.035.5h35.931c.02-.164.034-.33.034-.5v-2H0v2zm14-13h22v2.5H14zm0-5.5V11h22V9c0-.17-.014-.336-.035-.5H14z",}));el.appendChild(svg["path"]("M14 11h22v3H14zM0 22h36v3H0zm2.065 8.5h31.87c1.092-.605 1.869-1.707 2.031-3H.035c.161 1.293.938 2.395 2.03 3zM0 14h5.5v5.5H0zm14 2.5V14H8.5v5.5H36v-3zm19.935-11C33.361 5.182 32.702 5 32 5H4c-.702 0-1.361.182-1.935.5C.973 6.105.196 7.207.034 8.5.014 8.664 0 8.83 0 9v2h5.5V5.5h3V11H14V8.5h21.965c-.161-1.293-.938-2.395-2.03-3z", {["fill"]: "#0D5EB0",["d"]: "M14 11h22v3H14zM0 22h36v3H0zm2.065 8.5h31.87c1.092-.605 1.869-1.707 2.031-3H.035c.161 1.293.938 2.395 2.03 3zM0 14h5.5v5.5H0zm14 2.5V14H8.5v5.5H36v-3zm19.935-11C33.361 5.182 32.702 5 32 5H4c-.702 0-1.361.182-1.935.5C.973 6.105.196 7.207.034 8.5.014 8.664 0 8.83 0 9v2h5.5V5.5h3V11H14V8.5h21.965c-.161-1.293-.938-2.395-2.03-3z",}));el.appendChild(svg["path"]("M8.5 11V5h-3v6H0v3h5.5v5.5h3V14H14v-3z", {["fill"]: "#EEE",["d"]: "M8.5 11V5h-3v6H0v3h5.5v5.5h3V14H14v-3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};