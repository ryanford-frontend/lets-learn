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
				el.appendChild(svg["path"]("M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z", {["fill"]: "#FA743E",["d"]: "M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M9 32h1v4H9zm17 0h1v4h-1z", {["fill"]: "#DD551F",["d"]: "M9 32h1v4H9zm17 0h1v4h-1z",}));el.appendChild(svg["path"]("M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z", {["fill"]: "#FFAC33",["d"]: "M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z",}));el.appendChild(svg["path"]("M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z", {["fill"]: "#FFDC5D",["d"]: "M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z",}));el.appendChild(svg["circle"](18, 23, 2, {["cy"]: "23",["r"]: "1",["fill"]: "#C1694F",["cx"]: "18",}));el.appendChild(svg["path"]("M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z", {["fill"]: "#662113",["d"]: "M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z",}));el.appendChild(svg["path"]("M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};