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
				el.appendChild(svg["path"]("M27 12.964c0-3-3.198-9.355-4-12.964h-1c0 2 1 8.998-4 8.998S14 2 14 0h-1c-.802 3.609-4 9.964-4 12.964s3.34 4.144 2 8.036c-1.292 3.753-2 6-2 7 5 1 7 5 7 8h4c0-2 2-7 7-8 0-1-.708-3.247-2-7-1.34-3.893 2-5.036 2-8.036z", {["fill"]: "#9268CA",["d"]: "M27 12.964c0-3-3.198-9.355-4-12.964h-1c0 2 1 8.998-4 8.998S14 2 14 0h-1c-.802 3.609-4 9.964-4 12.964s3.34 4.144 2 8.036c-1.292 3.753-2 6-2 7 5 1 7 5 7 8h4c0-2 2-7 7-8 0-1-.708-3.247-2-7-1.34-3.893 2-5.036 2-8.036z",}));el.appendChild(svg["path"]("M24.695 19h-13.39c.019.31-.003.645-.06 1h13.509c-.056-.355-.078-.69-.059-1zM25 21H11c-.251.728-.472 1.383-.678 2h15.356c-.206-.617-.427-1.272-.678-2z", {["fill"]: "#78B159",["d"]: "M24.695 19h-13.39c.019.31-.003.645-.06 1h13.509c-.056-.355-.078-.69-.059-1zM25 21H11c-.251.728-.472 1.383-.678 2h15.356c-.206-.617-.427-1.272-.678-2z",}));el.appendChild(svg["path"]("M21 17h-6c-1.914 0-3.827-.007-5.741-2.635.555 1.523 1.826 2.657 2.024 4.43C12.649 18.002 16.55 18 18 18s5.351.002 6.717.795c.198-1.773 1.469-2.907 2.024-4.43C24.827 16.993 22.914 17 21 17zM9.505 25.57C9.174 26.704 9 27.506 9 28c5 1 7 5 7 8h1c0-5.476-4.884-9.105-7.495-10.43zM27 28c0-.494-.174-1.296-.505-2.43C23.884 26.895 19 30.524 19 36h1c0-2 2-7 7-8z", {["fill"]: "#7450A8",["d"]: "M21 17h-6c-1.914 0-3.827-.007-5.741-2.635.555 1.523 1.826 2.657 2.024 4.43C12.649 18.002 16.55 18 18 18s5.351.002 6.717.795c.198-1.773 1.469-2.907 2.024-4.43C24.827 16.993 22.914 17 21 17zM9.505 25.57C9.174 26.704 9 27.506 9 28c5 1 7 5 7 8h1c0-5.476-4.884-9.105-7.495-10.43zM27 28c0-.494-.174-1.296-.505-2.43C23.884 26.895 19 30.524 19 36h1c0-2 2-7 7-8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};