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
				el.appendChild(svg["path"]("M34 33c0 1.104-.896 2-2 2h-3c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM9 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM5 15.5c0 .829-.671 1.5-1.5 1.5h-2C.671 17 0 16.329 0 15.5S.671 14 1.5 14h2c.829 0 1.5.671 1.5 1.5zm26 0c0 .829.672 1.5 1.5 1.5h2c.828 0 1.5-.671 1.5-1.5s-.672-1.5-1.5-1.5h-2c-.828 0-1.5.671-1.5 1.5z", {["fill"]: "#66757F",["d"]: "M34 33c0 1.104-.896 2-2 2h-3c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM9 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM5 15.5c0 .829-.671 1.5-1.5 1.5h-2C.671 17 0 16.329 0 15.5S.671 14 1.5 14h2c.829 0 1.5.671 1.5 1.5zm26 0c0 .829.672 1.5 1.5 1.5h2c.828 0 1.5-.671 1.5-1.5s-.672-1.5-1.5-1.5h-2c-.828 0-1.5.671-1.5 1.5z",}));el.appendChild(svg["path"]("M9 5c4-1 14-1 18 0 3.881.97 5 11 5 11s2 0 2 4v8s0 3-3 4c-3.911 1.304-8 1-13 1s-9.088.304-13-1c-3-1-3-4-3-4v-8s0-4 2-4C4 16 5.12 5.97 9 5z", {["fill"]: "#CCD6DD",["d"]: "M9 5c4-1 14-1 18 0 3.881.97 5 11 5 11s2 0 2 4v8s0 3-3 4c-3.911 1.304-8 1-13 1s-9.088.304-13-1c-3-1-3-4-3-4v-8s0-4 2-4C4 16 5.12 5.97 9 5z",}));el.appendChild(svg["path"]("M18 21c-5.718 0-11.136-.101-16-.279V28s0 3 3 4c3.912 1.304 8 1 13 1s9.089.304 13-1c3-1 3-4 3-4v-7.279c-4.864.178-10.282.279-16 .279z", {["fill"]: "#292F33",["d"]: "M18 21c-5.718 0-11.136-.101-16-.279V28s0 3 3 4c3.912 1.304 8 1 13 1s9.089.304 13-1c3-1 3-4 3-4v-7.279c-4.864.178-10.282.279-16 .279z",}));el.appendChild(svg["path"]("M18 15c3.905 0 8.623.2 12 .561L29 10c-1-3-7-3-11-3S8 7 7 10l-1 5.561C9.377 15.2 14.095 15 18 15z", {["fill"]: "#55ACEE",["d"]: "M18 15c3.905 0 8.623.2 12 .561L29 10c-1-3-7-3-11-3S8 7 7 10l-1 5.561C9.377 15.2 14.095 15 18 15z",}));el.appendChild(svg["path"]("M12 24c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2zm12 0c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2s-.896-2-2-2h-4c-1.104 0-2 .896-2 2z", {["fill"]: "#CCD6DD",["d"]: "M12 24c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2zm12 0c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2s-.896-2-2-2h-4c-1.104 0-2 .896-2 2z",}));el.appendChild(svg["path"]("M29 28.5c0 .828-.672 1.5-1.5 1.5h-19c-.829 0-1.5-.672-1.5-1.5S7.671 27 8.5 27h19c.828 0 1.5.672 1.5 1.5z", {["fill"]: "#66757F",["d"]: "M29 28.5c0 .828-.672 1.5-1.5 1.5h-19c-.829 0-1.5-.672-1.5-1.5S7.671 27 8.5 27h19c.828 0 1.5.672 1.5 1.5z",}));el.appendChild(svg["path"]("M11.999 21c-.15 0-.303-.034-.446-.105l-6-3c-.494-.247-.694-.848-.447-1.342.247-.494.846-.696 1.342-.447l6 3c.494.247.694.848.447 1.342-.176.35-.529.552-.896.552zm12.002 0c-.367 0-.72-.202-.896-.553-.247-.494-.047-1.095.447-1.342l6-3c.494-.246 1.094-.046 1.342.447.247.494.047 1.095-.447 1.342l-6 3c-.143.072-.296.106-.446.106z", {["fill"]: "#99AAB5",["d"]: "M11.999 21c-.15 0-.303-.034-.446-.105l-6-3c-.494-.247-.694-.848-.447-1.342.247-.494.846-.696 1.342-.447l6 3c.494.247.694.848.447 1.342-.176.35-.529.552-.896.552zm12.002 0c-.367 0-.72-.202-.896-.553-.247-.494-.047-1.095.447-1.342l6-3c.494-.246 1.094-.046 1.342.447.247.494.047 1.095-.447 1.342l-6 3c-.143.072-.296.106-.446.106z",}));el.appendChild(svg["path"]("M18 3.5c0 .829-.671 1.5-1.5 1.5h-7C8.671 5 8 4.329 8 3.5S8.671 2 9.5 2h7c.829 0 1.5.671 1.5 1.5z", {["fill"]: "#DD2E44",["d"]: "M18 3.5c0 .829-.671 1.5-1.5 1.5h-7C8.671 5 8 4.329 8 3.5S8.671 2 9.5 2h7c.829 0 1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M28 3.5c0 .829-.672 1.5-1.5 1.5h-7c-.829 0-1.5-.671-1.5-1.5S18.671 2 19.5 2h7c.828 0 1.5.671 1.5 1.5z", {["fill"]: "#55ACEE",["d"]: "M28 3.5c0 .829-.672 1.5-1.5 1.5h-7c-.829 0-1.5-.671-1.5-1.5S18.671 2 19.5 2h7c.828 0 1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M16 2h4v3h-4z", {["fill"]: "#F5F8FA",["d"]: "M16 2h4v3h-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};