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
				el.appendChild(svg["path"]("M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z", {["fill"]: "#4289C1",["d"]: "M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M26 32h1v4h-1zM9 32h1v4H9z", {["fill"]: "#2A6797",["d"]: "M26 32h1v4h-1zM9 32h1v4H9z",}));el.appendChild(svg["path"]("M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M9 5.938V17c0 4.971 4.029 9 9 9s9-4.029 9-9V6.25L9 5.938z", {["fill"]: "#FFDC5D",["d"]: "M9 5.938V17c0 4.971 4.029 9 9 9s9-4.029 9-9V6.25L9 5.938z",}));el.appendChild(svg["path"]("M10.847 13.715c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.801-2.861 1.788-2.861s1.788 1.281 1.788 2.861zm17.882 0c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.8-2.861 1.788-2.861s1.788 1.281 1.788 2.861z", {["fill"]: "#FFDC5D",["d"]: "M10.847 13.715c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.801-2.861 1.788-2.861s1.788 1.281 1.788 2.861zm17.882 0c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.8-2.861 1.788-2.861s1.788 1.281 1.788 2.861z",}));el.appendChild(svg["path"]("M18 .823c-7.019 0-10.139 4.684-10.139 8.588 0 3.903 1.343 4.986 1.56 3.903.78-3.903 3.12-5.101 3.12-5.101 4.68 3.904 3.9.781 3.9.781 4.679 4.684 2.34 0 2.34 0 1.56 1.562 6.239 1.562 6.239 1.562s.78 1.198 1.559 2.759c.78 1.562 1.56 0 1.56-3.903 0-3.905-3.9-8.589-10.139-8.589z", {["fill"]: "#FFAC33",["d"]: "M18 .823c-7.019 0-10.139 4.684-10.139 8.588 0 3.903 1.343 4.986 1.56 3.903.78-3.903 3.12-5.101 3.12-5.101 4.68 3.904 3.9.781 3.9.781 4.679 4.684 2.34 0 2.34 0 1.56 1.562 6.239 1.562 6.239 1.562s.78 1.198 1.559 2.759c.78 1.562 1.56 0 1.56-3.903 0-3.905-3.9-8.589-10.139-8.589z",}));el.appendChild(svg["ellipse"](18, 22, 4, 2, {["rx"]: "2",["cy"]: "22",["ry"]: "1",["fill"]: "#C1694F",["cx"]: "18",}));el.appendChild(svg["path"]("M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));el.appendChild(svg["path"]("M28.613 4.397L26.66 2.444l-.525.619-3.5-1.271v1.58l-2.63.607c-.603.141-.98.743-.841 1.347.138.604.742.98 1.345.841l3.579-.825 1.79 1.791c.3.3.802.581 1.329.751l.678 5.586s0 .875.875.875.875-.875.875-.875v-7l-1.022-2.073z", {["fill"]: "#EF9645",["d"]: "M28.613 4.397L26.66 2.444l-.525.619-3.5-1.271v1.58l-2.63.607c-.603.141-.98.743-.841 1.347.138.604.742.98 1.345.841l3.579-.825 1.79 1.791c.3.3.802.581 1.329.751l.678 5.586s0 .875.875.875.875-.875.875-.875v-7l-1.022-2.073z",}));el.appendChild(svg["path"]("M28.957 4.053L27.004 2.1 26.479 0h-3.5v3.027l-2.63.607c-.603.141-.98.743-.841 1.347.138.604.742.98 1.345.841l3.579-.825 1.79 1.791c.3.3.802.581 1.329.751l.678 5.586s0 .875.875.875.875-.875.875-.875v-7l-1.022-2.072z", {["fill"]: "#FFDC5D",["d"]: "M28.957 4.053L27.004 2.1 26.479 0h-3.5v3.027l-2.63.607c-.603.141-.98.743-.841 1.347.138.604.742.98 1.345.841l3.579-.825 1.79 1.791c.3.3.802.581 1.329.751l.678 5.586s0 .875.875.875.875-.875.875-.875v-7l-1.022-2.072z",}));el.appendChild(svg["path"]("M7.387 4.397L9.34 2.444l.525.619 3.5-1.396v1.705l2.63.607c.603.141.98.743.841 1.347-.138.604-.742.98-1.345.841l-3.579-.825-1.79 1.791c-.3.3-.802.581-1.329.751l-.678 5.586s0 .875-.875.875-.875-.875-.875-.875v-7l1.022-2.073z", {["fill"]: "#EF9645",["d"]: "M7.387 4.397L9.34 2.444l.525.619 3.5-1.396v1.705l2.63.607c.603.141.98.743.841 1.347-.138.604-.742.98-1.345.841l-3.579-.825-1.79 1.791c-.3.3-.802.581-1.329.751l-.678 5.586s0 .875-.875.875-.875-.875-.875-.875v-7l1.022-2.073z",}));el.appendChild(svg["path"]("M7.043 4.053L8.996 2.1 9.521 0h3.5v3.027l2.63.607c.603.141.98.743.841 1.347-.138.604-.742.98-1.345.841l-3.579-.825-1.79 1.791c-.3.3-.802.581-1.329.751l-.678 5.586s0 .875-.875.875-.875-.875-.875-.875v-7l1.022-2.072z", {["fill"]: "#FFDC5D",["d"]: "M7.043 4.053L8.996 2.1 9.521 0h3.5v3.027l2.63.607c.603.141.98.743.841 1.347-.138.604-.742.98-1.345.841l-3.579-.825-1.79 1.791c-.3.3-.802.581-1.329.751l-.678 5.586s0 .875-.875.875-.875-.875-.875-.875v-7l1.022-2.072z",}));el.appendChild(svg["path"]("M23.906 15.056c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.046-.104.016-.225-.073-.296zm-7.5 0c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.045-.104.016-.225-.073-.296z", {["d"]: "M23.906 15.056c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.046-.104.016-.225-.073-.296zm-7.5 0c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.045-.104.016-.225-.073-.296z",["fill"]: "#662113",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};