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
				el.appendChild(svg["path"]("M7.915 34.868c.725.725 1.313 1.313 2.417.21 1.103-1.103-.665-2.871.439-3.975l.552-.552c1.104-1.104 2.872.664 3.974-.438 1.104-1.104.516-1.692-.21-2.417L12.41 25.02c-.725-.725-1.808-.819-2.417-.209l-4.964 4.964c-.61.609-.516 1.692.209 2.417l2.677 2.676z", {["fill"]: "#31373D",["d"]: "M7.915 34.868c.725.725 1.313 1.313 2.417.21 1.103-1.103-.665-2.871.439-3.975l.552-.552c1.104-1.104 2.872.664 3.974-.438 1.104-1.104.516-1.692-.21-2.417L12.41 25.02c-.725-.725-1.808-.819-2.417-.209l-4.964 4.964c-.61.609-.516 1.692.209 2.417l2.677 2.676z",}));el.appendChild(svg["path"]("M1.03 33.772c.781.781 2.047.781 2.829 0l19.07-19.069c-.101-2.727 4.95-4.95 3.536-6.364-.781-.781-4.243 5.657-6.971 4.142L1.03 30.944c-.781.782-.781 2.048 0 2.828z", {["fill"]: "#67757F",["d"]: "M1.03 33.772c.781.781 2.047.781 2.829 0l19.07-19.069c-.101-2.727 4.95-4.95 3.536-6.364-.781-.781-4.243 5.657-6.971 4.142L1.03 30.944c-.781.782-.781 2.048 0 2.828z",}));el.appendChild(svg["path"]("M16.919 3.743c-2.148 2.147-2.149 5.63 0 7.778 2.148 2.148 5.63 2.148 7.778 0 2.147-2.148 2.147-5.63 0-7.778-2.148-2.148-5.631-2.148-7.778 0zm6.363 6.364c-1.366 1.367-3.583 1.367-4.95 0s-1.367-3.583 0-4.95 3.583-1.367 4.95 0 1.367 3.583 0 4.95z", {["fill"]: "#31373D",["d"]: "M16.919 3.743c-2.148 2.147-2.149 5.63 0 7.778 2.148 2.148 5.63 2.148 7.778 0 2.147-2.148 2.147-5.63 0-7.778-2.148-2.148-5.631-2.148-7.778 0zm6.363 6.364c-1.366 1.367-3.583 1.367-4.95 0s-1.367-3.583 0-4.95 3.583-1.367 4.95 0 1.367 3.583 0 4.95z",}));el.appendChild(svg["path"]("M26.111 1.622c-2.148 2.147-2.148 5.63 0 7.778 2.148 2.148 5.63 2.148 7.777 0 2.148-2.148 2.148-5.631 0-7.778-2.147-2.148-5.629-2.148-7.777 0zm6.364 6.364c-1.366 1.366-3.583 1.366-4.949 0-1.367-1.368-1.367-3.583 0-4.95 1.366-1.367 3.582-1.368 4.949 0 1.367 1.366 1.367 3.583 0 4.95z", {["fill"]: "#31373D",["d"]: "M26.111 1.622c-2.148 2.147-2.148 5.63 0 7.778 2.148 2.148 5.63 2.148 7.777 0 2.148-2.148 2.148-5.631 0-7.778-2.147-2.148-5.629-2.148-7.777 0zm6.364 6.364c-1.366 1.366-3.583 1.366-4.949 0-1.367-1.368-1.367-3.583 0-4.95 1.366-1.367 3.582-1.368 4.949 0 1.367 1.366 1.367 3.583 0 4.95z",}));el.appendChild(svg["path"]("M23.989 10.814c-2.147 2.147-2.147 5.63 0 7.778 2.147 2.148 5.631 2.148 7.778 0 2.147-2.148 2.147-5.63 0-7.778-2.147-2.147-5.63-2.147-7.778 0zm6.365 6.364c-1.366 1.367-3.583 1.367-4.95 0s-1.366-3.583 0-4.949c1.367-1.367 3.583-1.368 4.95 0 1.366 1.366 1.366 3.582 0 4.949z", {["fill"]: "#31373D",["d"]: "M23.989 10.814c-2.147 2.147-2.147 5.63 0 7.778 2.147 2.148 5.631 2.148 7.778 0 2.147-2.148 2.147-5.63 0-7.778-2.147-2.147-5.63-2.147-7.778 0zm6.365 6.364c-1.366 1.367-3.583 1.367-4.95 0s-1.366-3.583 0-4.949c1.367-1.367 3.583-1.368 4.95 0 1.366 1.366 1.366 3.582 0 4.949z",}));el.appendChild(svg["path"]("M19.394 18.238c.781.781.781 2.048 0 2.829-.781.78-2.048.78-2.829 0l-2.829-2.829c-.781-.78-.781-2.047 0-2.828.781-.781 2.048-.781 2.829 0l2.829 2.828z", {["fill"]: "#67757F",["d"]: "M19.394 18.238c.781.781.781 2.048 0 2.829-.781.78-2.048.78-2.829 0l-2.829-2.829c-.781-.78-.781-2.047 0-2.828.781-.781 2.048-.781 2.829 0l2.829 2.828z",}));el.appendChild(svg["circle"](26, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#31373D",["cx"]: "26",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};