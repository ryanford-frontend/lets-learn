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
				el.appendChild(svg["path"]("M18 30v6H2s-1.995-4.989 2-7c2.155-1.085 4 0 4 0l10 1zm0 0v6h16s1.995-4.989-2-7c-2.155-1.085-4 0-4 0l-10 1z", {["fill"]: "#292F33",["d"]: "M18 30v6H2s-1.995-4.989 2-7c2.155-1.085 4 0 4 0l10 1zm0 0v6h16s1.995-4.989-2-7c-2.155-1.085-4 0-4 0l-10 1z",}));el.appendChild(svg["path"]("M12 36l-2-3 8 2 8-2-2 3z", {["fill"]: "#99AAB5",["d"]: "M12 36l-2-3 8 2 8-2-2 3z",}));el.appendChild(svg["path"]("M18 32l2 1-2 3-2-3z", {["fill"]: "#99AAB5",["d"]: "M18 32l2 1-2 3-2-3z",}));el.appendChild(svg["path"]("M13.64 28.101c1.744 1.268 2.848 1.963 4.36 1.963 1.512 0 2.615-.696 4.359-1.963V24.29h-8.72v3.811z", {["fill"]: "#FFDC5D",["d"]: "M13.64 28.101c1.744 1.268 2.848 1.963 4.36 1.963 1.512 0 2.615-.696 4.359-1.963V24.29h-8.72v3.811z",}));el.appendChild(svg["path"]("M13.632 25.5c.368 2.027 2.724 2.219 4.364 2.219 1.639 0 4.004-.191 4.363-2.219v-3.019h-8.728V25.5z", {["fill"]: "#FFAC33",["d"]: "M13.632 25.5c.368 2.027 2.724 2.219 4.364 2.219 1.639 0 4.004-.191 4.363-2.219v-3.019h-8.728V25.5z",}));el.appendChild(svg["path"]("M11.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623", {["fill"]: "#FFDC5D",["d"]: "M11.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623",}));el.appendChild(svg["path"]("M18 7c-5 0-8 2-8 5s0 9 2 12 4 3 6 3 4 0 6-3 2-9 2-12-3-5-8-5z", {["fill"]: "#FFDC5D",["d"]: "M18 7c-5 0-8 2-8 5s0 9 2 12 4 3 6 3 4 0 6-3 2-9 2-12-3-5-8-5z",}));el.appendChild(svg["path"]("M18.821 3.118c.859.07 2.492-1.259 4.177-.741-1.037.821.282 1.908 1.076 2.469.469.331 2.76.29 3.115.686-1.729.778-.878 1.75-.575 2.494.384.945.563 1.949.563 2.942 0 3.604-.706 5.047-1.412 3.604-.706-1.441-1.356-3.368-1.356-3.368s-4.292.485-5.704-.957l.503 1.796s-1.396-.332-2.909-2.319l-.519 1.772s-.971-.477-2.723-1.969c0 0-2.118 1.442-2.824 5.046-.196 1.001-1.412 0-1.412-3.604 0-1.214.037-2.696.519-3.908.347-.873 1.514-1.745.045-3.085 1.642-.735 3.307.718 4.344.823.544-.868 2.87-3.366 3.824-3.589-.173 1.081.292 1.829 1.268 1.908z", {["fill"]: "#FFAC33",["d"]: "M18.821 3.118c.859.07 2.492-1.259 4.177-.741-1.037.821.282 1.908 1.076 2.469.469.331 2.76.29 3.115.686-1.729.778-.878 1.75-.575 2.494.384.945.563 1.949.563 2.942 0 3.604-.706 5.047-1.412 3.604-.706-1.441-1.356-3.368-1.356-3.368s-4.292.485-5.704-.957l.503 1.796s-1.396-.332-2.909-2.319l-.519 1.772s-.971-.477-2.723-1.969c0 0-2.118 1.442-2.824 5.046-.196 1.001-1.412 0-1.412-3.604 0-1.214.037-2.696.519-3.908.347-.873 1.514-1.745.045-3.085 1.642-.735 3.307.718 4.344.823.544-.868 2.87-3.366 3.824-3.589-.173 1.081.292 1.829 1.268 1.908z",}));el.appendChild(svg["path"]("M18 13l5-1 1-2 2 2-1 3 1 2-2 2-1 2-1-2-4-2-4 2-1 2-1-2-2-2 1-2-1-3 2-2 1 2z", {["fill"]: "#BE1931",["d"]: "M18 13l5-1 1-2 2 2-1 3 1 2-2 2-1 2-1-2-4-2-4 2-1 2-1-2-2-2 1-2-1-3 2-2 1 2z",}));el.appendChild(svg["path"]("M15.5 15.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m8 0c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1", {["d"]: "M15.5 15.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m8 0c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1",}));el.appendChild(svg["path"]("M18.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75", {["fill"]: "#C1694F",["d"]: "M18.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75",}));el.appendChild(svg["path"]("M33 29c-.81-1.299-6-2-9-2-1 0-3 3.063-6 3.063S13 27 12 27c-3 0-8.19.701-9 2-1.497 2.4 4 3 6 3s4.773-1 9-1 7 1 9 1 7.497-.6 6-3z", {["fill"]: "#BE1931",["d"]: "M33 29c-.81-1.299-6-2-9-2-1 0-3 3.063-6 3.063S13 27 12 27c-3 0-8.19.701-9 2-1.497 2.4 4 3 6 3s4.773-1 9-1 7 1 9 1 7.497-.6 6-3z",}));el.appendChild(svg["path"]("M5.818 25.881c.691-.07 2.528 2.7 2.45 3.153-.078.454-4.212.618-4.443.25-.231-.368 1.302-3.333 1.993-3.403zm2.311 1.742c.173.27 3.225.117 3.28-.219.054-.336-1.324-2.367-1.834-2.31-.51.056-1.619 2.258-1.446 2.529zm24.032 1.661c-.23.369-4.364.204-4.443-.25-.078-.454 1.759-3.223 2.45-3.153.692.07 2.224 3.035 1.993 3.403zm-5.75-4.19c-.51-.057-1.888 1.975-1.834 2.31.054.336 3.106.489 3.28.219.173-.271-.936-2.473-1.446-2.529z", {["fill"]: "#99AAB5",["d"]: "M5.818 25.881c.691-.07 2.528 2.7 2.45 3.153-.078.454-4.212.618-4.443.25-.231-.368 1.302-3.333 1.993-3.403zm2.311 1.742c.173.27 3.225.117 3.28-.219.054-.336-1.324-2.367-1.834-2.31-.51.056-1.619 2.258-1.446 2.529zm24.032 1.661c-.23.369-4.364.204-4.443-.25-.078-.454 1.759-3.223 2.45-3.153.692.07 2.224 3.035 1.993 3.403zm-5.75-4.19c-.51-.057-1.888 1.975-1.834 2.31.054.336 3.106.489 3.28.219.173-.271-.936-2.473-1.446-2.529z",}));el.appendChild(svg["path"]("M20.834 21.179c-.691.301-1.978.821-3.108.821H15.5c-.275 0-.5.225-.5.5s.225.5.5.5h4.204c.006 0 .007-.003.013-.003l.068.003c.581 0 1.016-.629 1.252-1.135.282-.605.261-.887-.203-.686z", {["fill"]: "#C1694F",["d"]: "M20.834 21.179c-.691.301-1.978.821-3.108.821H15.5c-.275 0-.5.225-.5.5s.225.5.5.5h4.204c.006 0 .007-.003.013-.003l.068.003c.581 0 1.016-.629 1.252-1.135.282-.605.261-.887-.203-.686z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};