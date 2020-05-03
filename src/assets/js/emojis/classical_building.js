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
				el.appendChild(svg["path"]("M7 11h22v18H7z", {["fill"]: "#292F33",["d"]: "M7 11h22v18H7z",}));el.appendChild(svg["path"]("M8 29c0 1.104-.597 2-1.333 2H5.333C4.597 31 4 30.104 4 29V11c0-1.104.597-2 1.333-2h1.333C7.403 9 8 9.896 8 11v18zm24 0c0 1.104-.597 2-1.333 2h-1.334C28.597 31 28 30.104 28 29V11c0-1.104.597-2 1.333-2h1.334C31.403 9 32 9.896 32 11v18zm-16 0c0 1.104-.597 2-1.333 2h-1.333C12.597 31 12 30.104 12 29V11c0-1.104.597-2 1.333-2h1.333C15.403 9 16 9.896 16 11v18zm8 0c0 1.104-.598 2-1.334 2h-1.332C20.598 31 20 30.104 20 29V11c0-1.104.598-2 1.334-2h1.332C23.402 9 24 9.896 24 11v18z", {["fill"]: "#CCD6DD",["d"]: "M8 29c0 1.104-.597 2-1.333 2H5.333C4.597 31 4 30.104 4 29V11c0-1.104.597-2 1.333-2h1.333C7.403 9 8 9.896 8 11v18zm24 0c0 1.104-.597 2-1.333 2h-1.334C28.597 31 28 30.104 28 29V11c0-1.104.597-2 1.333-2h1.334C31.403 9 32 9.896 32 11v18zm-16 0c0 1.104-.597 2-1.333 2h-1.333C12.597 31 12 30.104 12 29V11c0-1.104.597-2 1.333-2h1.333C15.403 9 16 9.896 16 11v18zm8 0c0 1.104-.598 2-1.334 2h-1.332C20.598 31 20 30.104 20 29V11c0-1.104.598-2 1.334-2h1.332C23.402 9 24 9.896 24 11v18z",}));el.appendChild(svg["path"]("M33 30c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h26c1.104 0 2 .896 2 2z", {["fill"]: "#9AAAB4",["d"]: "M33 30c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h26c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M35 32c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z", {["fill"]: "#CCD6DD",["d"]: "M35 32c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.671 35 0 34.328 0 33.5S.671 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#E1E8ED",["d"]: "M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.671 35 0 34.328 0 33.5S.671 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z",}));el.appendChild(svg["path"]("M33 10c0-1.104-.956-2-2.133-2H5c-1.179 0-2 .896-2 2 0 .751.386 1.398 1 1.74V13h4v-1h4v1h4v-1h4v1h4v-1h4v1h4v-1.312c.599-.354 1-.975 1-1.688z", {["fill"]: "#9AAAB4",["d"]: "M33 10c0-1.104-.956-2-2.133-2H5c-1.179 0-2 .896-2 2 0 .751.386 1.398 1 1.74V13h4v-1h4v1h4v-1h4v1h4v-1h4v1h4v-1.312c.599-.354 1-.975 1-1.688z",}));el.appendChild(svg["path"]("M2 8.444C2 7.413 3.012 7 3.012 7l14.904-7 15.047 7S34 7.231 34 8.45V9H2v-.556z", {["fill"]: "#CCD6DD",["d"]: "M2 8.444C2 7.413 3.012 7 3.012 7l14.904-7 15.047 7S34 7.231 34 8.45V9H2v-.556z",}));el.appendChild(svg["path"]("M18 2.542S7.681 7.407 6.65 7.844C5.619 8.281 5.964 9 6.651 9h22.646c1.062 0 .812-.812-.031-1.25C28.422 7.312 18 2.542 18 2.542z", {["fill"]: "#9AAAB4",["d"]: "M18 2.542S7.681 7.407 6.65 7.844C5.619 8.281 5.964 9 6.651 9h22.646c1.062 0 .812-.812-.031-1.25C28.422 7.312 18 2.542 18 2.542z",}));el.appendChild(svg["path"]("M34 9c0 .552-.447 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1l30 .006c.553 0 1 .442 1 .994z", {["fill"]: "#CCD6DD",["d"]: "M34 9c0 .552-.447 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1l30 .006c.553 0 1 .442 1 .994z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};