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
				el.appendChild(svg["path"]("M30.08 31.069s-.77.477-1.539 0c-.77-.477-.311-1.246-.311-1.246-.867-.075-.958-.878-.643-1.604C27.081 28.08 26.551 28 26 28H10c-3.313 0-6 2.687-6 6v2h28v-2c0-.62-.094-1.219-.269-1.782-1.684.642-1.651-1.149-1.651-1.149z", {["fill"]: "#D99E82",["d"]: "M30.08 31.069s-.77.477-1.539 0c-.77-.477-.311-1.246-.311-1.246-.867-.075-.958-.878-.643-1.604C27.081 28.08 26.551 28 26 28H10c-3.313 0-6 2.687-6 6v2h28v-2c0-.62-.094-1.219-.269-1.782-1.684.642-1.651-1.149-1.651-1.149z",}));el.appendChild(svg["path"]("M13.64 28.101c1.744 1.267 2.849 3.728 4.36 3.728 1.511 0 2.616-2.462 4.36-3.728V24.29h-8.72v3.811z", {["fill"]: "#CCD6DD",["d"]: "M13.64 28.101c1.744 1.267 2.849 3.728 4.36 3.728 1.511 0 2.616-2.462 4.36-3.728V24.29h-8.72v3.811z",}));el.appendChild(svg["path"]("M13.632 25.973C14.848 27.347 16.356 28 17.996 28c1.639 0 3.147-.654 4.364-2.027v-3.491h-8.728v3.491z", {["fill"]: "#99AAB5",["d"]: "M13.632 25.973C14.848 27.347 16.356 28 17.996 28c1.639 0 3.147-.654 4.364-2.027v-3.491h-8.728v3.491z",}));el.appendChild(svg["path"]("M11.444 15.935c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.906.001 1.639 1.175 1.639 2.623zm16.389 0c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.906.001 1.639 1.175 1.639 2.623z", {["fill"]: "#CCD6DD",["d"]: "M11.444 15.935c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.906.001 1.639 1.175 1.639 2.623zm16.389 0c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.906.001 1.639 1.175 1.639 2.623z",}));el.appendChild(svg["path"]("M9.478 16.96c0-5.589 3.816-10.121 8.522-10.121s8.522 4.531 8.522 10.121c0 5.04-5.116 10.12-8.522 10.12S9.478 22 9.478 16.96z", {["fill"]: "#CCD6DD",["d"]: "M9.478 16.96c0-5.589 3.816-10.121 8.522-10.121s8.522 4.531 8.522 10.121c0 5.04-5.116 10.12-8.522 10.12S9.478 22 9.478 16.96z",}));el.appendChild(svg["path"]("M12.232 17.768c-.778-.778-.778-2.051 0-2.828l.707-.707c.778-.778 2.051-.778 2.828 0 .778.778.778 2.051 0 2.828l-.707.707c-.777.778-2.05.778-2.828 0zm8-3.536c.778-.778 2.051-.778 2.828 0l.707.707c.778.778.778 2.051 0 2.828-.778.778-2.051.778-2.828 0l-.707-.707c-.778-.777-.778-2.05 0-2.828z", {["fill"]: "#99AAB5",["d"]: "M12.232 17.768c-.778-.778-.778-2.051 0-2.828l.707-.707c.778-.778 2.051-.778 2.828 0 .778.778.778 2.051 0 2.828l-.707.707c-.777.778-2.05.778-2.828 0zm8-3.536c.778-.778 2.051-.778 2.828 0l.707.707c.778.778.778 2.051 0 2.828-.778.778-2.051.778-2.828 0l-.707-.707c-.778-.777-.778-2.05 0-2.828z",}));el.appendChild(svg["path"]("M18 21.816c-2.754 0-3.6.706-3.741.848-.256.256-.256.671 0 .927.248.248.645.255.902.024.052-.038.721-.487 2.839-.487 2.2 0 2.836.485 2.842.49.255.255.656.243.913-.013.256-.256.242-.684-.014-.94-.141-.143-.987-.849-3.741-.849z", {["fill"]: "#66757F",["d"]: "M18 21.816c-2.754 0-3.6.706-3.741.848-.256.256-.256.671 0 .927.248.248.645.255.902.024.052-.038.721-.487 2.839-.487 2.2 0 2.836.485 2.842.49.255.255.656.243.913-.013.256-.256.242-.684-.014-.94-.141-.143-.987-.849-3.741-.849z",}));el.appendChild(svg["path"]("M28.646 9.958c-.833-.188-2.305-1.908-2.843-2.727-.006-.009-.012-.013-.017-.021-1.354-1.85-3.644-3.349-6.622-3.664.158-.261.272-.531.337-.775.122-.46.271-1.653-.417-.861-.575.662-2.406 1.428-2.99 1.661-1.426-.707-3.451-.603-3.906-.384-.562.271-.039.231.312.292.436.075.907.386 1.359.717-1.711.663-2.961 1.73-3.789 2.953l-.004.005c-.61.886-1.695 2.138-2.274 2.346-1.125.403.243.563.812.309.129-.057.261-.116.394-.183-.114.503-.176 1.006-.176 1.495 0 3.473 1.216 4.437 1.412 3.473.706-3.473 2.824-4.863 2.824-4.863 3.213 3.831 2.9.581 2.9.581 5.646 6.542 2.748.113 2.748.113 1.412 1.39 5.648 1.39 5.648 1.39l1.412 2.778c.706 1.39 1.412 0 1.412-3.473 0-.285-.032-.575-.079-.867.425.157.812.215 1.13.225.667.022 1.25-.332.417-.52z", {["fill"]: "#292F33",["d"]: "M28.646 9.958c-.833-.188-2.305-1.908-2.843-2.727-.006-.009-.012-.013-.017-.021-1.354-1.85-3.644-3.349-6.622-3.664.158-.261.272-.531.337-.775.122-.46.271-1.653-.417-.861-.575.662-2.406 1.428-2.99 1.661-1.426-.707-3.451-.603-3.906-.384-.562.271-.039.231.312.292.436.075.907.386 1.359.717-1.711.663-2.961 1.73-3.789 2.953l-.004.005c-.61.886-1.695 2.138-2.274 2.346-1.125.403.243.563.812.309.129-.057.261-.116.394-.183-.114.503-.176 1.006-.176 1.495 0 3.473 1.216 4.437 1.412 3.473.706-3.473 2.824-4.863 2.824-4.863 3.213 3.831 2.9.581 2.9.581 5.646 6.542 2.748.113 2.748.113 1.412 1.39 5.648 1.39 5.648 1.39l1.412 2.778c.706 1.39 1.412 0 1.412-3.473 0-.285-.032-.575-.079-.867.425.157.812.215 1.13.225.667.022 1.25-.332.417-.52z",}));el.appendChild(svg["path"]("M15.5 15.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1zm8 0c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1z", {["fill"]: "#662113",["d"]: "M15.5 15.5c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1zm8 0c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1z",}));el.appendChild(svg["path"]("M18.038 31.234s3.344 2.137 4.056 2.422c.156.063-.366-3.656-.366-3.656l-2.415.547-1.317 1.531L17.001 30h-2.727s-.524 3.781-.232 3.625c.638-.342 3.996-2.391 3.996-2.391z", {["fill"]: "#C1694F",["d"]: "M18.038 31.234s3.344 2.137 4.056 2.422c.156.063-.366-3.656-.366-3.656l-2.415.547-1.317 1.531L17.001 30h-2.727s-.524 3.781-.232 3.625c.638-.342 3.996-2.391 3.996-2.391z",}));el.appendChild(svg["path"]("M19.312 30.547c-.027.054-.362.277-.606.765-.24-.125-.512-.237-.816-.312-1.335-.329-2.177-.039-2.177-.039s.213 1.491.396 1.82c.156.281.513.876.513.876S15.958 34 15.677 36h3.886c-.281-1.594-1.078-2.062-1.078-2.062s.829-.629 1.016-.891c.312-.438.392-.808.392-.808s-.051-.062-.145-.159c.21-.09.432-.221.658-.424 1.047-.937-1.094-1.109-1.094-1.109z", {["fill"]: "#269",["d"]: "M19.312 30.547c-.027.054-.362.277-.606.765-.24-.125-.512-.237-.816-.312-1.335-.329-2.177-.039-2.177-.039s.213 1.491.396 1.82c.156.281.513.876.513.876S15.958 34 15.677 36h3.886c-.281-1.594-1.078-2.062-1.078-2.062s.829-.629 1.016-.891c.312-.438.392-.808.392-.808s-.051-.062-.145-.159c.21-.09.432-.221.658-.424 1.047-.937-1.094-1.109-1.094-1.109z",}));el.appendChild(svg["path"]("M13.292 26.625c.566.566 3.709 3.383 3.709 3.383s-1.126 1.242-3.084 3.534c-.197.23-1.542-4.625-1.583-5.708-.012-.304.687-1.48.958-1.209zm9.438 0c-.566.566-3.418 3.922-3.418 3.922s.834.703 2.793 2.995c.197.23 1.542-4.625 1.583-5.708.012-.304-.687-1.48-.958-1.209z", {["fill"]: "#FFD983",["d"]: "M13.292 26.625c.566.566 3.709 3.383 3.709 3.383s-1.126 1.242-3.084 3.534c-.197.23-1.542-4.625-1.583-5.708-.012-.304.687-1.48.958-1.209zm9.438 0c-.566.566-3.418 3.922-3.418 3.922s.834.703 2.793 2.995c.197.23 1.542-4.625 1.583-5.708.012-.304-.687-1.48-.958-1.209z",}));el.appendChild(svg["path"]("M26.929 33.341c-.127 1.929-.83 2.659-.83 2.659h1.385s.189-2.975-.555-2.659z", {["fill"]: "#662113",["d"]: "M26.929 33.341c-.127 1.929-.83 2.659-.83 2.659h1.385s.189-2.975-.555-2.659z",}));el.appendChild(svg["path"]("M17 20c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5s.5.225.5.5v1c0 .275-.225.5-.5.5zm2 0c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5s.5.225.5.5v1c0 .275-.225.5-.5.5z", {["fill"]: "#99AAB5",["d"]: "M17 20c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5s.5.225.5.5v1c0 .275-.225.5-.5.5zm2 0c-.275 0-.5-.225-.5-.5v-1c0-.275.225-.5.5-.5s.5.225.5.5v1c0 .275-.225.5-.5.5z",}));el.appendChild(svg["path"]("M13.811 20.784c-1.71 0-3.092-1.357-3.165-1.431-.195-.195-.195-.511 0-.706.195-.195.512-.195.707-.002.018.018 1.773 1.734 3.423.907.247-.125.547-.022.671.224.124.247.023.547-.224.671-.481.241-.958.337-1.412.337zm8.378 0c-.454 0-.932-.096-1.413-.337-.247-.124-.347-.424-.224-.671.125-.246.424-.347.671-.224 1.657.829 3.406-.89 3.423-.906.195-.195.512-.195.707 0s.195.512 0 .707c-.072.074-1.455 1.431-3.164 1.431z", {["fill"]: "#9AAAB4",["d"]: "M13.811 20.784c-1.71 0-3.092-1.357-3.165-1.431-.195-.195-.195-.511 0-.706.195-.195.512-.195.707-.002.018.018 1.773 1.734 3.423.907.247-.125.547-.022.671.224.124.247.023.547-.224.671-.481.241-.958.337-1.412.337zm8.378 0c-.454 0-.932-.096-1.413-.337-.247-.124-.347-.424-.224-.671.125-.246.424-.347.671-.224 1.657.829 3.406-.89 3.423-.906.195-.195.512-.195.707 0s.195.512 0 .707c-.072.074-1.455 1.431-3.164 1.431z",}));el.appendChild(svg["path"]("M5.617 33.962c.319-.251.872-1.996 1.869-2.411s3.206-.957 3.173.09-1.34 2.485-1.068 3.018c-.98.476-4.987.099-3.974-.697z", {["fill"]: "#662113",["d"]: "M5.617 33.962c.319-.251.872-1.996 1.869-2.411s3.206-.957 3.173.09-1.34 2.485-1.068 3.018c-.98.476-4.987.099-3.974-.697z",}));el.appendChild(svg["path"]("M6.238 33.802c.319-.251.651-1.746 1.648-2.16s2.806-1.047 2.772 0-1.23 1.685-2.21 2.16c-.979.475-3.222.795-2.21 0z", {["fill"]: "#CCD6DD",["d"]: "M6.238 33.802c.319-.251.651-1.746 1.648-2.16s2.806-1.047 2.772 0-1.23 1.685-2.21 2.16c-.979.475-3.222.795-2.21 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};