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
				el.appendChild(svg["path"]("M7 12c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1m-2 5c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h3c.552 0 1 .448 1 1m-2 5c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1s.448-1 1-1h1c.552 0 1 .447 1 1", {["fill"]: "#55ACEE",["d"]: "M7 12c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1m-2 5c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h3c.552 0 1 .448 1 1m-2 5c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1s.448-1 1-1h1c.552 0 1 .447 1 1",}));el.appendChild(svg["path"]("M32.301 25c-.626 2.209-2.925 4-5.134 4h-20c-2.209 0-3.492-1.791-2.866-4l3.398-12c.626-2.209 2.924-4 5.133-4h20c2.209 0 3.493 1.791 2.867 4l-3.398 12z", {["fill"]: "#CCD6DD",["d"]: "M32.301 25c-.626 2.209-2.925 4-5.134 4h-20c-2.209 0-3.492-1.791-2.866-4l3.398-12c.626-2.209 2.924-4 5.133-4h20c2.209 0 3.493 1.791 2.867 4l-3.398 12z",}));el.appendChild(svg["path"]("M17.336 17.636L4.384 26.949c-.034.028-.054.063-.085.091.179.57.518 1.043.992 1.384.035-.023.073-.033.107-.06L18.35 19.05c.501-.391.681-1.023.401-1.414-.281-.391-.913-.391-1.415 0m13.81 9.404c-.015-.028-.016-.063-.034-.09l-7.674-9.314c-.281-.391-.913-.391-1.416 0-.501.391-.68 1.023-.4 1.414l7.676 9.314c.018.026.051.037.072.06.666-.34 1.274-.814 1.776-1.384", {["fill"]: "#99AAB5",["d"]: "M17.336 17.636L4.384 26.949c-.034.028-.054.063-.085.091.179.57.518 1.043.992 1.384.035-.023.073-.033.107-.06L18.35 19.05c.501-.391.681-1.023.401-1.414-.281-.391-.913-.391-1.415 0m13.81 9.404c-.015-.028-.016-.063-.034-.09l-7.674-9.314c-.281-.391-.913-.391-1.416 0-.501.391-.68 1.023-.4 1.414l7.676 9.314c.018.026.051.037.072.06.666-.34 1.274-.814 1.776-1.384",}));el.appendChild(svg["path"]("M35.699 13c.626-2.209-.658-4-2.867-4h-20c-2.209 0-4.507 1.791-5.133 4l-.021.074 8.806 8.452c1.631 1.584 3.788 1.475 5.725.371l13.227-7.964.263-.933z", {["fill"]: "#99AAB5",["d"]: "M35.699 13c.626-2.209-.658-4-2.867-4h-20c-2.209 0-4.507 1.791-5.133 4l-.021.074 8.806 8.452c1.631 1.584 3.788 1.475 5.725.371l13.227-7.964.263-.933z",}));el.appendChild(svg["path"]("M32.832 9h-20c-1.578 0-3.189.921-4.217 2.248l9.217 8.794c.749.719 2.434.729 3.656 0l14.294-8.768C35.516 9.933 34.42 9 32.832 9z", {["fill"]: "#E1E8ED",["d"]: "M32.832 9h-20c-1.578 0-3.189.921-4.217 2.248l9.217 8.794c.749.719 2.434.729 3.656 0l14.294-8.768C35.516 9.933 34.42 9 32.832 9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};