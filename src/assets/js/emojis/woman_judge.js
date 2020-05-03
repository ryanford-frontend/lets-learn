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
				el.appendChild(svg["path"]("M35 36v-3.5c0-3.314-3.685-5.5-7-5.5H16c-3.313 0-7 2.186-7 5.5V36h26z", {["fill"]: "#292F33",["d"]: "M35 36v-3.5c0-3.314-3.685-5.5-7-5.5H16c-3.313 0-7 2.186-7 5.5V36h26z",}));el.appendChild(svg["path"]("M18.328 27.02C19.794 28.085 21.292 29 22 29s2.194-.915 3.66-1.98v-3.205h-7.332v3.205z", {["fill"]: "#FFDC5D",["d"]: "M18.328 27.02C19.794 28.085 21.292 29 22 29s2.194-.915 3.66-1.98v-3.205h-7.332v3.205z",}));el.appendChild(svg["path"]("M18.321 25.179c1.023 1.155 2.291 1.468 3.669 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z", {["fill"]: "#F9CA55",["d"]: "M18.321 25.179c1.023 1.155 2.291 1.468 3.669 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z",}));el.appendChild(svg["path"]("M18.869 5.337c0-1.433 1.434-2.594 3.202-2.594s3.202 1.161 3.202 2.594-1.434 2.594-3.202 2.594-3.202-1.161-3.202-2.594", {["fill"]: "#6D6E71",["d"]: "M18.869 5.337c0-1.433 1.434-2.594 3.202-2.594s3.202 1.161 3.202 2.594-1.434 2.594-3.202 2.594-3.202-1.161-3.202-2.594",}));el.appendChild(svg["path"]("M31.799 16.362c0-1.388-.683-2.511-1.539-2.581-.89-4.841-4.213-8.444-8.188-8.444s-7.299 3.603-8.188 8.444c-.857.07-1.539 1.193-1.539 2.581 0 1.396.691 2.527 1.555 2.583.913 4.516 4.22 7.145 8.172 7.145 3.952 0 7.259-2.629 8.173-7.145.862-.056 1.554-1.187 1.554-2.583", {["fill"]: "#FFDC5D",["d"]: "M31.799 16.362c0-1.388-.683-2.511-1.539-2.581-.89-4.841-4.213-8.444-8.188-8.444s-7.299 3.603-8.188 8.444c-.857.07-1.539 1.193-1.539 2.581 0 1.396.691 2.527 1.555 2.583.913 4.516 4.22 7.145 8.172 7.145 3.952 0 7.259-2.629 8.173-7.145.862-.056 1.554-1.187 1.554-2.583",}));el.appendChild(svg["path"]("M22.071 23.27c-1.634 0-2.266-.488-2.376-.586-.268-.238-.292-.648-.054-.916.229-.261.624-.291.892-.073.039.025.454.278 1.538.278 1.136 0 1.537-.277 1.541-.281.269-.238.665-.201.902.066.238.268.201.688-.067.926-.109.097-.743.586-2.376.586", {["fill"]: "#DF1F32",["d"]: "M22.071 23.27c-1.634 0-2.266-.488-2.376-.586-.268-.238-.292-.648-.054-.916.229-.261.624-.291.892-.073.039.025.454.278 1.538.278 1.136 0 1.537-.277 1.541-.281.269-.238.665-.201.902.066.238.268.201.688-.067.926-.109.097-.743.586-2.376.586",}));el.appendChild(svg["path"]("M22.72 21h-1.297c-.358 0-.648-.142-.648-.5s.291-.5.648-.5h1.297c.358 0 .649.142.649.5s-.291.5-.649.5", {["fill"]: "#C1694F",["d"]: "M22.72 21h-1.297c-.358 0-.648-.142-.648-.5s.291-.5.648-.5h1.297c.358 0 .649.142.649.5s-.291.5-.649.5",}));el.appendChild(svg["path"]("M31.799 10.525c-1.297-4.54-5.188-5.837-7.255-5.837-1.176 0-2.473.649-2.473.649s-1.297-.649-2.594-.649c-1.945 0-5.836 1.297-7.133 5.837-1.069 3.741 1.297 7.134 1.297 7.134 0-1.946 1.297-5.837 4.539-5.837 3.243 0 3.892-2.594 3.892-2.594s.51 2.594 3.753 2.594c3.242 0 4.678 3.891 4.678 5.837-.001 0 2.365-3.393 1.296-7.134", {["fill"]: "#808285",["d"]: "M31.799 10.525c-1.297-4.54-5.188-5.837-7.255-5.837-1.176 0-2.473.649-2.473.649s-1.297-.649-2.594-.649c-1.945 0-5.836 1.297-7.133 5.837-1.069 3.741 1.297 7.134 1.297 7.134 0-1.946 1.297-5.837 4.539-5.837 3.243 0 3.892-2.594 3.892-2.594s.51 2.594 3.753 2.594c3.242 0 4.678 3.891 4.678 5.837-.001 0 2.365-3.393 1.296-7.134",}));el.appendChild(svg["circle"](31.15, 18.307, 1.298, {["cy"]: "18.307",["r"]: ".649",["fill"]: "#AA8DD8",["cx"]: "31.15",}));el.appendChild(svg["circle"](12.992, 18.307, 1.298, {["cy"]: "18.307",["r"]: ".649",["fill"]: "#AA8DD8",["cx"]: "12.992",}));el.appendChild(svg["path"]("M19.5 15h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m7 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5", {["fill"]: "#808285",["d"]: "M19.5 15h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m7 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5",}));el.appendChild(svg["path"]("M18.5 18.25c-.413 0-.75-.337-.75-.75v-1c0-.413.337-.75.75-.75s.75.337.75.75v1c0 .413-.337.75-.75.75m7 0c-.413 0-.75-.337-.75-.75v-1c0-.413.337-.75.75-.75s.75.337.75.75v1c0 .413-.337.75-.75.75", {["fill"]: "#662113",["d"]: "M18.5 18.25c-.413 0-.75-.337-.75-.75v-1c0-.413.337-.75.75-.75s.75.337.75.75v1c0 .413-.337.75-.75.75m7 0c-.413 0-.75-.337-.75-.75v-1c0-.413.337-.75.75-.75s.75.337.75.75v1c0 .413-.337.75-.75.75",}));el.appendChild(svg["path"]("M26.989 27c-.083-.667-.458-1.375-1-1-.543.376-3.936 2.952-3.995 2.996-.058-.044-3.451-2.62-3.994-2.996-.542-.375-.917.333-1 1s.333 4.667 1 5c.661.33 3.937-2.937 3.995-2.995.058.058 3.334 3.325 3.995 2.995.666-.333 1.082-4.333.999-5z", {["fill"]: "#F5F8FA",["d"]: "M26.989 27c-.083-.667-.458-1.375-1-1-.543.376-3.936 2.952-3.995 2.996-.058-.044-3.451-2.62-3.994-2.996-.542-.375-.917.333-1 1s.333 4.667 1 5c.661.33 3.937-2.937 3.995-2.995.058.058 3.334 3.325 3.995 2.995.666-.333 1.082-4.333.999-5z",}));el.appendChild(svg["path"]("M12.083 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m16.846 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659m-3 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659", {["fill"]: "#66757F",["d"]: "M12.083 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m16.846 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659m-3 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659",}));el.appendChild(svg["path"]("M7.854 23.665c.468 1.24.178 2.498-.649 2.812-.826.311-1.876-.441-2.345-1.681-.468-1.239-.178-2.498.649-2.811.826-.312 1.876.44 2.345 1.68", {["fill"]: "#C1694F",["d"]: "M7.854 23.665c.468 1.24.178 2.498-.649 2.812-.826.311-1.876-.441-2.345-1.681-.468-1.239-.178-2.498.649-2.811.826-.312 1.876.44 2.345 1.68",}));el.appendChild(svg["path"]("M9.092 36l-3.479-9.208.25-.094c1.098-.415 1.656-1.651 1.242-2.75-.415-1.097-1.652-1.656-2.75-1.241l-1.995.754c-1.098.413-1.657 1.65-1.242 2.749.414 1.098 1.652 1.656 2.749 1.241l.25-.094L7.382 36h1.71z", {["fill"]: "#662113",["d"]: "M9.092 36l-3.479-9.208.25-.094c1.098-.415 1.656-1.651 1.242-2.75-.415-1.097-1.652-1.656-2.75-1.241l-1.995.754c-1.098.413-1.657 1.65-1.242 2.749.414 1.098 1.652 1.656 2.749 1.241l.25-.094L7.382 36h1.71z",}));el.appendChild(svg["path"]("M3.363 25.361c.468 1.24.178 2.498-.649 2.812-.826.312-1.876-.44-2.345-1.681-.468-1.239-.178-2.498.649-2.811.827-.312 1.877.44 2.345 1.68", {["fill"]: "#C1694F",["d"]: "M3.363 25.361c.468 1.24.178 2.498-.649 2.812-.826.312-1.876-.44-2.345-1.681-.468-1.239-.178-2.498.649-2.811.827-.312 1.877.44 2.345 1.68",}));el.appendChild(svg["path"]("M11.318 36l-.466-1.588c-.363-1.239-1.673-1.955-2.911-1.592l-1.255.368c-1.205.354-1.907 1.604-1.61 2.812h6.242z", {["fill"]: "#FFDC5D",["d"]: "M11.318 36l-.466-1.588c-.363-1.239-1.673-1.955-2.911-1.592l-1.255.368c-1.205.354-1.907 1.604-1.61 2.812h6.242z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};