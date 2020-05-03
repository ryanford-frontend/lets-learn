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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#88C9F9",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M26.496 9.174L32 0h-2l-6.38 7.292c-1.162-.559-2.418-.949-3.741-1.141L19 0h-2l-.879 6.151c-1.298.188-2.532.566-3.676 1.109L7 0H5l4.561 9.123c-.91.778-1.713 1.674-2.38 2.673L0 10v2l5.819 2.494C5.298 15.9 5 17.413 5 19c-.001.098-.013.191-.017.288l-2.748.393c-.078-.225-.156-.444-.235-.681-1-2.999-2-5-2-5v18c0 4 4 4 4 4h28s-.465-1.044 0-2c.179-.368 1.447-.658 1-2-.709-2.129-1.417-6.767-1.769-10H36v-2l-4.992-.713c-.004-.1-.008-.206-.008-.287 0-1.587-.299-3.1-.818-4.506L36 12v-2l-7.182 1.796c-.651-.978-1.437-1.855-2.322-2.622zM4 24s-.372-.747-.886-2h1.483C4.319 23.181 4 24 4 24z", {["fill"]: "#157569",["d"]: "M26.496 9.174L32 0h-2l-6.38 7.292c-1.162-.559-2.418-.949-3.741-1.141L19 0h-2l-.879 6.151c-1.298.188-2.532.566-3.676 1.109L7 0H5l4.561 9.123c-.91.778-1.713 1.674-2.38 2.673L0 10v2l5.819 2.494C5.298 15.9 5 17.413 5 19c-.001.098-.013.191-.017.288l-2.748.393c-.078-.225-.156-.444-.235-.681-1-2.999-2-5-2-5v18c0 4 4 4 4 4h28s-.465-1.044 0-2c.179-.368 1.447-.658 1-2-.709-2.129-1.417-6.767-1.769-10H36v-2l-4.992-.713c-.004-.1-.008-.206-.008-.287 0-1.587-.299-3.1-.818-4.506L36 12v-2l-7.182 1.796c-.651-.978-1.437-1.855-2.322-2.622zM4 24s-.372-.747-.886-2h1.483C4.319 23.181 4 24 4 24z",}));el.appendChild(svg["path"]("M7 18s.422-3.316 4-6c4-3 6-2 6-1s-3 1-6 3-4 4-4 4zm22 0s-.423-3.316-4-6c-4-3-6-2.001-6-1 0 1 3 1 6 3s4 4 4 4zm-11-4c-6 0-8 4-8 4s2-2 4-2 2 2 2 2v2c0 1 2 1 2 1s2 0 2-1v-2s0-2 2-2 4 2 4 2-2-4-8-4z", {["fill"]: "#3FC9B9",["d"]: "M7 18s.422-3.316 4-6c4-3 6-2 6-1s-3 1-6 3-4 4-4 4zm22 0s-.423-3.316-4-6c-4-3-6-2.001-6-1 0 1 3 1 6 3s4 4 4 4zm-11-4c-6 0-8 4-8 4s2-2 4-2 2 2 2 2v2c0 1 2 1 2 1s2 0 2-1v-2s0-2 2-2 4 2 4 2-2-4-8-4z",}));el.appendChild(svg["path"]("M23 20c-2 0-2-1-2-1s-.083 2.815-1 4h-4c-.918-1.185-1-4-1-4s0 1-2 1-4-1-4-1 0 9 2 10c1.265.633 4-1 7-1s5.735 1.633 7 1c2-1 2-10 2-10s-2 1-4 1z", {["fill"]: "#3FC9B9",["d"]: "M23 20c-2 0-2-1-2-1s-.083 2.815-1 4h-4c-.918-1.185-1-4-1-4s0 1-2 1-4-1-4-1 0 9 2 10c1.265.633 4-1 7-1s5.735 1.633 7 1c2-1 2-10 2-10s-2 1-4 1z",}));el.appendChild(svg["path"]("M15 25h6s-1-1-3-1-3 1-3 1z", {["fill"]: "#157569",["d"]: "M15 25h6s-1-1-3-1-3 1-3 1z",}));el.appendChild(svg["path"]("M2 23c-1 5 .215 10.177 1 9 2-3 2 0 2 1s.526 4.211 2 2c1.401-2.101 6.368-.281 9.225 1h1.154C15.31 34.605 10.456 33.638 8 32c-3-2-6-9-6-9z", {["fill"]: "#3FC9B9",["d"]: "M2 23c-1 5 .215 10.177 1 9 2-3 2 0 2 1s.526 4.211 2 2c1.401-2.101 6.368-.281 9.225 1h1.154C15.31 34.605 10.456 33.638 8 32c-3-2-6-9-6-9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};