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
				el.appendChild(svg["path"]("M19 27.255s8-.213 9.651-4.075c1.069-2.501-.609-9.554-.609-13.93 0-1.481-1.167-2.25-3.416-2.25H10.129C9.004 7 6.8 6.738 6.8 9.125c0 4.284-1.765 11.341-.634 13.815C8.042 27.042 16 27.255 16 27.255v3.123s-4.584 2.34-5.498 2.883c-.984.562-.33 1.462.063 1.617.656.258 2.253 1.102 6.78 1.102 4.641 0 6.202-.914 6.765-1.102.217-.072 1.347-.932.011-1.723C21.743 31.747 19 30.378 19 30.378v-3.123z", {["fill"]: "#8899A6",["d"]: "M19 27.255s8-.213 9.651-4.075c1.069-2.501-.609-9.554-.609-13.93 0-1.481-1.167-2.25-3.416-2.25H10.129C9.004 7 6.8 6.738 6.8 9.125c0 4.284-1.765 11.341-.634 13.815C8.042 27.042 16 27.255 16 27.255v3.123s-4.584 2.34-5.498 2.883c-.984.562-.33 1.462.063 1.617.656.258 2.253 1.102 6.78 1.102 4.641 0 6.202-.914 6.765-1.102.217-.072 1.347-.932.011-1.723C21.743 31.747 19 30.378 19 30.378v-3.123z",}));el.appendChild(svg["path"]("M28 8.442c0 1.621-2.547 2.935-10.623 2.935-8.076 0-10.623-1.314-10.623-2.935 0-1.622 2.547-2.935 10.623-2.935C25.453 5.507 28 6.821 28 8.442z", {["fill"]: "#CCD6DD",["d"]: "M28 8.442c0 1.621-2.547 2.935-10.623 2.935-8.076 0-10.623-1.314-10.623-2.935 0-1.622 2.547-2.935 10.623-2.935C25.453 5.507 28 6.821 28 8.442z",}));el.appendChild(svg["path"]("M8.458 8.583c2.042 9.5-2.417 13.583 2.083 15.167 5.432 1.911 8.542 1.593 13.458 0 4.5-1.458 1.5-6.875 2.125-14.792.162-2.037-17.666-.375-17.666-.375z", {["fill"]: "#CCD6DD",["d"]: "M8.458 8.583c2.042 9.5-2.417 13.583 2.083 15.167 5.432 1.911 8.542 1.593 13.458 0 4.5-1.458 1.5-6.875 2.125-14.792.162-2.037-17.666-.375-17.666-.375z",}));el.appendChild(svg["path"]("M9.042 14.583c-.083 1.083-1.09 6.129-.625 7.292.5 1.25 1.75 3.25 8.917 3.25 5.25 0 8.583-1.583 9.125-3.583.471-1.74-.25-5.583-.333-7", {["fill"]: "#F4900C",["d"]: "M9.042 14.583c-.083 1.083-1.09 6.129-.625 7.292.5 1.25 1.75 3.25 8.917 3.25 5.25 0 8.583-1.583 9.125-3.583.471-1.74-.25-5.583-.333-7",}));el.appendChild(svg["ellipse"](17.5, 14.5, 17, 3, {["rx"]: "8.5",["cy"]: "14.5",["ry"]: "1.5",["fill"]: "#FFCC4D",["cx"]: "17.5",}));el.appendChild(svg["path"]("M24.745 4.901s-5.922 13.911-6.231 14.549c-.377.78.601 1.874 1.47.483.868-1.391 6.741-13.698 6.741-13.698l-1.98-1.334z", {["fill"]: "#C1694F",["d"]: "M24.745 4.901s-5.922 13.911-6.231 14.549c-.377.78.601 1.874 1.47.483.868-1.391 6.741-13.698 6.741-13.698l-1.98-1.334z",}));el.appendChild(svg["path"]("M17.31 11.675c-4.291 0-7.672-1.007-8.943-1.603-.5-.234-.715-.83-.481-1.33.234-.501.83-.716 1.33-.481.074.035 7.707 3.276 16.552-.111.514-.199 1.094.06 1.291.576.198.516-.061 1.094-.576 1.292-3.222 1.234-6.389 1.657-9.173 1.657z", {["fill"]: "#FFF",["d"]: "M17.31 11.675c-4.291 0-7.672-1.007-8.943-1.603-.5-.234-.715-.83-.481-1.33.234-.501.83-.716 1.33-.481.074.035 7.707 3.276 16.552-.111.514-.199 1.094.06 1.291.576.198.516-.061 1.094-.576 1.292-3.222 1.234-6.389 1.657-9.173 1.657z",}));el.appendChild(svg["path"]("M20.698 14.386l-.661 1.544c.697-.02 1.447-.085 2.084-.173l.476-.97c-.617.011-1.236-.116-1.899-.401z", {["fill"]: "#FFAC33",["d"]: "M20.698 14.386l-.661 1.544c.697-.02 1.447-.085 2.084-.173l.476-.97c-.617.011-1.236-.116-1.899-.401z",}));el.appendChild(svg["path"]("M18.514 19.45c-.377.78.601 1.874 1.47.483.288-.462 1.129-2.129 2.122-4.147-.589.065-1.355.121-2.077.161-.807 1.884-1.421 3.309-1.515 3.503z", {["fill"]: "#CC6F00",["d"]: "M18.514 19.45c-.377.78.601 1.874 1.47.483.288-.462 1.129-2.129 2.122-4.147-.589.065-1.355.121-2.077.161-.807 1.884-1.421 3.309-1.515 3.503z",}));el.appendChild(svg["path"]("M34.398 9.624c-1.02-1.582-5.397-7.694-5.585-7.957-.188-.261-.491-.417-.813-.417-1.459 0-4.763-.016-7.233-.028-1.481-.007-2.663-.013-2.975-.013-.648 0-1.18.425-1.324 1.059-.336 1.48 1.528 4.291 7.892 7.343 4.216 2.021 6.661 2.446 7.97 2.446h.001c1.474 0 2.038-.551 2.252-1.013.214-.466.144-.991-.185-1.42z", {["fill"]: "#77B255",["d"]: "M34.398 9.624c-1.02-1.582-5.397-7.694-5.585-7.957-.188-.261-.491-.417-.813-.417-1.459 0-4.763-.016-7.233-.028-1.481-.007-2.663-.013-2.975-.013-.648 0-1.18.425-1.324 1.059-.336 1.48 1.528 4.291 7.892 7.343 4.216 2.021 6.661 2.446 7.97 2.446h.001c1.474 0 2.038-.551 2.252-1.013.214-.466.144-.991-.185-1.42z",}));el.appendChild(svg["path"]("M26.141 10.411c3.136 1.328 5.078 1.645 6.188 1.645h.001c1.474 0 2.038-.551 2.252-1.013.215-.465.146-.99-.184-1.419-.653-1.013-2.681-3.881-4.106-5.884.812 2.577 1.111 6.467-4.151 6.671z", {["fill"]: "#5C913B",["d"]: "M26.141 10.411c3.136 1.328 5.078 1.645 6.188 1.645h.001c1.474 0 2.038-.551 2.252-1.013.215-.465.146-.99-.184-1.419-.653-1.013-2.681-3.881-4.106-5.884.812 2.577 1.111 6.467-4.151 6.671z",}));el.appendChild(svg["circle"](28.188, 1.688, 3.376, {["cy"]: "1.688",["r"]: "1.688",["fill"]: "#3E721D",["cx"]: "28.188",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};