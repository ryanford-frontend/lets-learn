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
				el.appendChild(svg["path"]("M14.858 9.497c.475 2.326-.182 4.236-2.921 4.638-2.741.403-6.7 3.898-8.848-1.798C1.844 9.038 1.092 2.234 2.628 2.009c1.537-.226 11.756 5.162 12.23 7.488z", {["fill"]: "#66757F",["d"]: "M14.858 9.497c.475 2.326-.182 4.236-2.921 4.638-2.741.403-6.7 3.898-8.848-1.798C1.844 9.038 1.092 2.234 2.628 2.009c1.537-.226 11.756 5.162 12.23 7.488z",}));el.appendChild(svg["path"]("M12.784 9.851c.865 1.392-2.205 3.833-3.844 4.568-1.639.736-2.915-.66-4.173-4.1-.55-1.503-1.234-5.532-.634-5.802.599-.268 7.785 3.942 8.651 5.334z", {["fill"]: "#CCD6DD",["d"]: "M12.784 9.851c.865 1.392-2.205 3.833-3.844 4.568-1.639.736-2.915-.66-4.173-4.1-.55-1.503-1.234-5.532-.634-5.802.599-.268 7.785 3.942 8.651 5.334z",}));el.appendChild(svg["path"]("M21.372 9.497c-.458 2.326.176 4.236 2.818 4.638 2.644.403 6.464 3.898 8.536-1.798 1.201-3.3 1.927-10.103.445-10.329-1.483-.225-11.342 5.163-11.799 7.489z", {["fill"]: "#66757F",["d"]: "M21.372 9.497c-.458 2.326.176 4.236 2.818 4.638 2.644.403 6.464 3.898 8.536-1.798 1.201-3.3 1.927-10.103.445-10.329-1.483-.225-11.342 5.163-11.799 7.489z",}));el.appendChild(svg["path"]("M23.373 9.851c-.835 1.392 2.127 3.833 3.708 4.568 1.581.736 2.812-.66 4.026-4.1.531-1.503 1.19-5.532.611-5.802-.577-.268-7.509 3.942-8.345 5.334z", {["fill"]: "#CCD6DD",["d"]: "M23.373 9.851c-.835 1.392 2.127 3.833 3.708 4.568 1.581.736 2.812-.66 4.026-4.1.531-1.503 1.19-5.532.611-5.802-.577-.268-7.509 3.942-8.345 5.334z",}));el.appendChild(svg["path"]("M32.347 26.912c0-.454-.188-1.091-.407-1.687.585.028 1.519.191 2.77.817-.008-.536-.118-.984-.273-1.393.041.02.075.034.116.055-1.104-3.31-3.309-5.517-3.309-5.517h2.206c-2.331-4.663-4.965-8.015-8.075-9.559-1.39-.873-3.688-1.338-7.373-1.339h-.003c-3.696 0-5.996.468-7.385 1.346-3.104 1.547-5.734 4.896-8.061 9.552H4.76s-2.207 2.206-3.311 5.517l.084-.039c-.201.392-.307.847-.282 1.377 1.263-.632 2.217-.792 2.813-.818-.189.513-.343 1.044-.386 1.475-.123.371-.191.812-.135 1.343 3.207-1.458 4.707-1.25 6.457-.375C11.213 31.29 14.206 34 18.001 34c3.793 0 6.746-2.794 7.958-6.416 1.458-1.25 3.708-.875 6.416.416.066-.413.036-.773-.036-1.093l.008.005z", {["fill"]: "#66757F",["d"]: "M32.347 26.912c0-.454-.188-1.091-.407-1.687.585.028 1.519.191 2.77.817-.008-.536-.118-.984-.273-1.393.041.02.075.034.116.055-1.104-3.31-3.309-5.517-3.309-5.517h2.206c-2.331-4.663-4.965-8.015-8.075-9.559-1.39-.873-3.688-1.338-7.373-1.339h-.003c-3.696 0-5.996.468-7.385 1.346-3.104 1.547-5.734 4.896-8.061 9.552H4.76s-2.207 2.206-3.311 5.517l.084-.039c-.201.392-.307.847-.282 1.377 1.263-.632 2.217-.792 2.813-.818-.189.513-.343 1.044-.386 1.475-.123.371-.191.812-.135 1.343 3.207-1.458 4.707-1.25 6.457-.375C11.213 31.29 14.206 34 18.001 34c3.793 0 6.746-2.794 7.958-6.416 1.458-1.25 3.708-.875 6.416.416.066-.413.036-.773-.036-1.093l.008.005z",}));el.appendChild(svg["path"]("M34.553 24.704c-.437-1.313-3.665-3.101-6.973-4.513.26-.664.42-1.401.42-2.191 0-2.761-1.791-5-4-5s-4 2.239-4 5c0 3 4 10-2.001 11.118-5.125-.955-2.954-6.201-2.212-9.58.072-.276.125-.559.158-.853.034-.245.055-.476.055-.685 0-2.761-1.791-5-4-5s-4 2.239-4 5c0 .79.16 1.527.421 2.191-3.308 1.412-6.535 3.2-6.973 4.513C3.655 23.6 4.759 23.6 4.759 23.6s-1.104 2.208-1.104 3.312c2.67-1.78 5.339-2.122 7.429-.452C12.297 30.083 14 33 18.001 30.124c3.999 2.876 5.7-.04 6.912-3.662 2.092-1.673 4.763-1.33 7.434.45 0-1.104-1.103-3.312-1.103-3.312s1.103.001 3.309 1.104z", {["fill"]: "#CCD6DD",["d"]: "M34.553 24.704c-.437-1.313-3.665-3.101-6.973-4.513.26-.664.42-1.401.42-2.191 0-2.761-1.791-5-4-5s-4 2.239-4 5c0 3 4 10-2.001 11.118-5.125-.955-2.954-6.201-2.212-9.58.072-.276.125-.559.158-.853.034-.245.055-.476.055-.685 0-2.761-1.791-5-4-5s-4 2.239-4 5c0 .79.16 1.527.421 2.191-3.308 1.412-6.535 3.2-6.973 4.513C3.655 23.6 4.759 23.6 4.759 23.6s-1.104 2.208-1.104 3.312c2.67-1.78 5.339-2.122 7.429-.452C12.297 30.083 14 33 18.001 30.124c3.999 2.876 5.7-.04 6.912-3.662 2.092-1.673 4.763-1.33 7.434.45 0-1.104-1.103-3.312-1.103-3.312s1.103.001 3.309 1.104z",}));el.appendChild(svg["path"]("M11 17s0-1.5 1.5-1.5S14 17 14 17v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5V17zm11 0s0-1.5 1.5-1.5S25 17 25 17v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5V17zm-7.061 9.156c-1.021.208 2.041 3.968 3.062 3.968 1.02 0 4.082-3.76 3.062-3.968s-5.103-.208-6.124 0z", {["fill"]: "#292F33",["d"]: "M11 17s0-1.5 1.5-1.5S14 17 14 17v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5V17zm11 0s0-1.5 1.5-1.5S25 17 25 17v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5V17zm-7.061 9.156c-1.021.208 2.041 3.968 3.062 3.968 1.02 0 4.082-3.76 3.062-3.968s-5.103-.208-6.124 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};