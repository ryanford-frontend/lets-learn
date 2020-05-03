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
				el.appendChild(svg["path"]("M27 22H9s-9 0-9 7c0 3.156 4 7 4 7h28s4-3.844 4-7c0-7-9-7-9-7z", {["fill"]: "#FA743E",["d"]: "M27 22H9s-9 0-9 7c0 3.156 4 7 4 7h28s4-3.844 4-7c0-7-9-7-9-7z",}));el.appendChild(svg["path"]("M21.906 4.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 27.114 15.415 27 19 27c7 0 10.334-4.684 10.629-12.639.178-4.811-2.645-8.456-7.723-10.099z", {["fill"]: "#FFAC33",["d"]: "M21.906 4.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 27.114 15.415 27 19 27c7 0 10.334-4.684 10.629-12.639.178-4.811-2.645-8.456-7.723-10.099z",}));el.appendChild(svg["circle"](18, 28, 6, {["cy"]: "28",["r"]: "3",["fill"]: "#F9CA55",["cx"]: "18",}));el.appendChild(svg["path"]("M25.89 15.686c-.677-.938-1.545-1.693-3.445-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.261-2.499-4.723-1.515-7.163-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03-.357 1.099-.246 2.079-.246 3.754 0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.318-4.23-1.091-5.299zM17 34l-5-1-2-1H7l-1 4h11c1 0 1-1 1-1 0-.553-1-1-1-1zm9-2l-2 1-5 1s-1 .447-1 1c0 0 0 1 1 1h11l-1-4h-3z", {["fill"]: "#FFDC5D",["d"]: "M25.89 15.686c-.677-.938-1.545-1.693-3.445-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.261-2.499-4.723-1.515-7.163-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03-.357 1.099-.246 2.079-.246 3.754 0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.318-4.23-1.091-5.299zM17 34l-5-1-2-1H7l-1 4h11c1 0 1-1 1-1 0-.553-1-1-1-1zm9-2l-2 1-5 1s-1 .447-1 1c0 0 0 1 1 1h11l-1-4h-3z",}));el.appendChild(svg["path"]("M22 22c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1s1 .447 1 1v1c0 .553-.447 1-1 1zm-8 0c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1v1c0 .553-.448 1-1 1z", {["fill"]: "#662113",["d"]: "M22 22c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1s1 .447 1 1v1c0 .553-.447 1-1 1zm-8 0c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1v1c0 .553-.448 1-1 1z",}));el.appendChild(svg["path"]("M19 26.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M19 26.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));el.appendChild(svg["path"]("M5.499 8c-.209 0-.419-.065-.599-.2l-4-3C.458 4.469.369 3.842.7 3.4c.332-.441.958-.531 1.4-.2l4 3c.442.331.531.958.2 1.4-.197.262-.497.4-.801.4zm3.002-3c-.323 0-.64-.156-.833-.445l-2-3c-.306-.46-.182-1.081.277-1.387.459-.307 1.08-.182 1.387.277l2 3c.306.459.182 1.081-.277 1.387-.171.114-.364.168-.554.168zm22 3c-.305 0-.604-.138-.801-.4-.332-.442-.242-1.069.2-1.4l4-3c.44-.333 1.068-.242 1.399.2.332.442.242 1.069-.2 1.4l-4 3c-.179.135-.389.2-.598.2zm-3.002-3c-.19 0-.383-.054-.554-.168-.46-.306-.584-.927-.277-1.387l2-3c.306-.459.925-.585 1.387-.277.46.306.584.927.277 1.387l-2 3c-.193.289-.51.445-.833.445z", {["d"]: "M5.499 8c-.209 0-.419-.065-.599-.2l-4-3C.458 4.469.369 3.842.7 3.4c.332-.441.958-.531 1.4-.2l4 3c.442.331.531.958.2 1.4-.197.262-.497.4-.801.4zm3.002-3c-.323 0-.64-.156-.833-.445l-2-3c-.306-.46-.182-1.081.277-1.387.459-.307 1.08-.182 1.387.277l2 3c.306.459.182 1.081-.277 1.387-.171.114-.364.168-.554.168zm22 3c-.305 0-.604-.138-.801-.4-.332-.442-.242-1.069.2-1.4l4-3c.44-.333 1.068-.242 1.399.2.332.442.242 1.069-.2 1.4l-4 3c-.179.135-.389.2-.598.2zm-3.002-3c-.19 0-.383-.054-.554-.168-.46-.306-.584-.927-.277-1.387l2-3c.306-.459.925-.585 1.387-.277.46.306.584.927.277 1.387l-2 3c-.193.289-.51.445-.833.445z",["fill"]: "#5DADEC",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};