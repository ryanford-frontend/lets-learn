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
				el.appendChild(svg["path"]("M26 26.163l.017.836H6V36h24v-9.835z", {["fill"]: "#77B255",["d"]: "M26 26.163l.017.836H6V36h24v-9.835z",}));el.appendChild(svg["path"]("M14 26.999s.85 2.063 3.55 2.063S21 26.999 21 26.999l-.024-3.9-6.976-.1v4z", {["fill"]: "#FFDC5D",["d"]: "M14 26.999s.85 2.063 3.55 2.063S21 26.999 21 26.999l-.024-3.9-6.976-.1v4z",}));el.appendChild(svg["path"]("M14.019 25.029c1.058 1.207 2.049 1.51 3.477 1.51 1.426 0 2.426-.304 3.485-1.51v-3.515H14.02v3.515z", {["fill"]: "#F9CA55",["d"]: "M14.019 25.029c1.058 1.207 2.049 1.51 3.477 1.51 1.426 0 2.426-.304 3.485-1.51v-3.515H14.02v3.515z",}));el.appendChild(svg["path"]("M11.842 16.187c0 1.271-.639 2.304-1.426 2.304-.788 0-1.426-1.033-1.426-2.304 0-1.272.639-2.305 1.426-2.305.788 0 1.426 1.033 1.426 2.305m14.26 0c0 1.271-.638 2.304-1.424 2.304-.789 0-1.428-1.033-1.428-2.304 0-1.272.639-2.305 1.428-2.305.786 0 1.424 1.033 1.424 2.305", {["fill"]: "#FFDC5D",["d"]: "M11.842 16.187c0 1.271-.639 2.304-1.426 2.304-.788 0-1.426-1.033-1.426-2.304 0-1.272.639-2.305 1.426-2.305.788 0 1.426 1.033 1.426 2.305m14.26 0c0 1.271-.638 2.304-1.424 2.304-.789 0-1.428-1.033-1.428-2.304 0-1.272.639-2.305 1.428-2.305.786 0 1.424 1.033 1.424 2.305",}));el.appendChild(svg["path"]("M10.13 17.087c0-4.911 3.32-8.893 7.416-8.893 4.095 0 7.416 3.982 7.416 8.893 0 4.91-3.32 8.893-7.416 8.893-4.095-.001-7.416-3.983-7.416-8.893", {["fill"]: "#FFDC5D",["d"]: "M10.13 17.087c0-4.911 3.32-8.893 7.416-8.893 4.095 0 7.416 3.982 7.416 8.893 0 4.91-3.32 8.893-7.416 8.893-4.095-.001-7.416-3.983-7.416-8.893",}));el.appendChild(svg["path"]("M17.546 23.099c-2.396 0-3.132-.62-3.256-.745-.222-.225-.222-.59 0-.815.216-.218.562-.223.786-.019.045.032.627.428 2.47.428 1.914 0 2.466-.426 2.472-.431.223-.223.573-.213.796.014.223.225.21.6-.013.824-.122.124-.858.744-3.255.744", {["fill"]: "#C1694F",["d"]: "M17.546 23.099c-2.396 0-3.132-.62-3.256-.745-.222-.225-.222-.59 0-.815.216-.218.562-.223.786-.019.045.032.627.428 2.47.428 1.914 0 2.466-.426 2.472-.431.223-.223.573-.213.796.014.223.225.21.6-.013.824-.122.124-.858.744-3.255.744",}));el.appendChild(svg["path"]("M17.546 5.243c4.914 0 7.986 3.663 7.986 6.714 0 3.051-.614 4.273-1.229 3.051l-1.229-2.44s-3.686 0-4.915-1.223c0 0 1.845 3.663-1.843 0 0 0 .614 2.442-3.071-.609 0 0-1.843 1.221-2.457 4.272-.17.847-1.229 0-1.229-3.051.001-3.052 2.459-6.714 7.987-6.714", {["fill"]: "#FFAC33",["d"]: "M17.546 5.243c4.914 0 7.986 3.663 7.986 6.714 0 3.051-.614 4.273-1.229 3.051l-1.229-2.44s-3.686 0-4.915-1.223c0 0 1.845 3.663-1.843 0 0 0 .614 2.442-3.071-.609 0 0-1.843 1.221-2.457 4.272-.17.847-1.229 0-1.229-3.051.001-3.052 2.459-6.714 7.987-6.714",}));el.appendChild(svg["path"]("M14.066 17.122c-.478 0-.87-.395-.87-.878v-.879c0-.483.392-.878.87-.878.479 0 .87.395.87.878v.879c0 .483-.392.878-.87.878m6.961 0c-.479 0-.87-.395-.87-.878v-.879c0-.483.392-.878.87-.878.477 0 .87.395.87.878v.879c0 .483-.393.878-.87.878", {["fill"]: "#662113",["d"]: "M14.066 17.122c-.478 0-.87-.395-.87-.878v-.879c0-.483.392-.878.87-.878.479 0 .87.395.87.878v.879c0 .483-.392.878-.87.878m6.961 0c-.479 0-.87-.395-.87-.878v-.879c0-.483.392-.878.87-.878.477 0 .87.395.87.878v.879c0 .483-.393.878-.87.878",}));el.appendChild(svg["path"]("M18.199 19.539h-1.306c-.36 0-.652-.296-.652-.659 0-.362.293-.659.652-.659h1.306c.359 0 .652.297.652.659.001.363-.292.659-.652.659", {["fill"]: "#C1694F",["d"]: "M18.199 19.539h-1.306c-.36 0-.652-.296-.652-.659 0-.362.293-.659.652-.659h1.306c.359 0 .652.297.652.659.001.363-.292.659-.652.659",}));el.appendChild(svg["path"]("M5.895 14.205s-3.834 1.39-4.214 6.221c0 0-2.4-4.817-.522-10.149l4.736 3.928zm14.156-8.228s-2.758-3.005-7.363-1.497c0 0 3.522-4.069 9.167-4.387l-1.804 5.884zm9.22 10.36s1.972-3.571-.923-7.457c0 0 4.978 2.046 7.075 7.296l-6.152.161z", {["fill"]: "#D1D3D4",["d"]: "M5.895 14.205s-3.834 1.39-4.214 6.221c0 0-2.4-4.817-.522-10.149l4.736 3.928zm14.156-8.228s-2.758-3.005-7.363-1.497c0 0 3.522-4.069 9.167-4.387l-1.804 5.884zm9.22 10.36s1.972-3.571-.923-7.457c0 0 4.978 2.046 7.075 7.296l-6.152.161z",}));el.appendChild(svg["circle"](4.603, 10.986, 7, {["cy"]: "10.986",["r"]: "3.5",["fill"]: "#5C913B",["cx"]: "4.603",}));el.appendChild(svg["circle"](22.516, 3.5, 7, {["cy"]: "3.5",["r"]: "3.5",["fill"]: "#BE1931",["cx"]: "22.516",}));el.appendChild(svg["circle"](32.396, 17.854, 7, {["cy"]: "17.854",["r"]: "3.5",["fill"]: "#3B88C3",["cx"]: "32.396",}));el.appendChild(svg["path"]("M32.646 23.488c-.111-.538-.634-.884-1.169-.774l-2.057.431h-1.809c-.85 0-1.538.695-1.538 1.555v1.552h3.847c.83 0 1.503-.666 1.532-1.496l.273-.057h.503c0-.059-.022-.113-.035-.169.342-.215.537-.621.453-1.042z", {["fill"]: "#F9CA55",["d"]: "M32.646 23.488c-.111-.538-.634-.884-1.169-.774l-2.057.431h-1.809c-.85 0-1.538.695-1.538 1.555v1.552h3.847c.83 0 1.503-.666 1.532-1.496l.273-.057h.503c0-.059-.022-.113-.035-.169.342-.215.537-.621.453-1.042z",}));el.appendChild(svg["path"]("M36.075 23.921c0-.429-.344-.776-.77-.776l-4.616.776h-3.847c-.426 0-.77.349-.77.778L26 26.25l1.611.002h3.078l4.616-1.553c.001 0 .77-.348.77-.778z", {["fill"]: "#FFDC5D",["d"]: "M36.075 23.921c0-.429-.344-.776-.77-.776l-4.616.776h-3.847c-.426 0-.77.349-.77.778L26 26.25l1.611.002h3.078l4.616-1.553c.001 0 .77-.348.77-.778z",}));el.appendChild(svg["path"]("M3.43 27.236c.11-.538.633-.884 1.168-.774l2.058.431h1.808c.85 0 1.539.695 1.539 1.555V30H6.155c-.83 0-1.503-.666-1.532-1.496l-.273-.057h-.503c0-.059.022-.113.036-.169-.343-.215-.538-.621-.453-1.042z", {["fill"]: "#F9CA55",["d"]: "M3.43 27.236c.11-.538.633-.884 1.168-.774l2.058.431h1.808c.85 0 1.539.695 1.539 1.555V30H6.155c-.83 0-1.503-.666-1.532-1.496l-.273-.057h-.503c0-.059.022-.113.036-.169-.343-.215-.538-.621-.453-1.042z",}));el.appendChild(svg["path"]("M0 27.669c0-.429.344-.776.769-.776l4.617.776h3.847c.425 0 .769.349.769.778V30H5.386L.769 28.447S0 28.099 0 27.669z", {["fill"]: "#FFDC5D",["d"]: "M0 27.669c0-.429.344-.776.769-.776l4.617.776h3.847c.425 0 .769.349.769.778V30H5.386L.769 28.447S0 28.099 0 27.669z",}));el.appendChild(svg["path"]("M10 30h1v6h-1zm15-3h1v9h-1z", {["fill"]: "#5C913B",["d"]: "M10 30h1v6h-1zm15-3h1v9h-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};