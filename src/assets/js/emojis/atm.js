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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M0 10h36v17H0z", {["fill"]: "#BBDDF5",["d"]: "M0 10h36v17H0z",}));el.appendChild(svg["path"]("M5.297 13.74c.272-.736.896-1.329 1.713-1.329.848 0 1.44.561 1.712 1.329l3.137 8.708c.096.256.128.48.128.593 0 .624-.512 1.056-1.105 1.056-.672 0-1.008-.352-1.168-.832l-.48-1.505h-4.45l-.48 1.489c-.16.496-.497.848-1.153.848-.64 0-1.184-.479-1.184-1.12 0-.256.08-.448.112-.528l3.218-8.709zm.177 5.81h3.041l-1.489-4.642h-.032l-1.52 4.642zm8.991-4.738H12.72c-.768 0-1.088-.561-1.088-1.104 0-.561.4-1.104 1.088-1.104h5.89c.688 0 1.089.544 1.089 1.104 0 .544-.32 1.104-1.089 1.104h-1.745v8.035c0 .8-.512 1.248-1.2 1.248s-1.201-.448-1.201-1.248v-8.035zm7.568-1.072c.096-.576.72-1.232 1.568-1.232.801 0 1.424.576 1.601 1.152l1.89 6.338h.031l1.889-6.338c.176-.576.801-1.152 1.6-1.152.85 0 1.473.656 1.57 1.232l1.488 8.932c.016.096.016.191.016.271 0 .704-.512 1.152-1.152 1.152-.816 0-1.137-.368-1.248-1.12l-.945-6.515h-.031l-1.922 6.707c-.111.384-.416.928-1.279.928-.865 0-1.169-.544-1.281-.928l-1.92-6.707h-.033l-.943 6.515c-.113.752-.433 1.12-1.249 1.12-.64 0-1.152-.448-1.152-1.152 0-.08 0-.176.017-.271l1.485-8.932z", {["d"]: "M5.297 13.74c.272-.736.896-1.329 1.713-1.329.848 0 1.44.561 1.712 1.329l3.137 8.708c.096.256.128.48.128.593 0 .624-.512 1.056-1.105 1.056-.672 0-1.008-.352-1.168-.832l-.48-1.505h-4.45l-.48 1.489c-.16.496-.497.848-1.153.848-.64 0-1.184-.479-1.184-1.12 0-.256.08-.448.112-.528l3.218-8.709zm.177 5.81h3.041l-1.489-4.642h-.032l-1.52 4.642zm8.991-4.738H12.72c-.768 0-1.088-.561-1.088-1.104 0-.561.4-1.104 1.088-1.104h5.89c.688 0 1.089.544 1.089 1.104 0 .544-.32 1.104-1.089 1.104h-1.745v8.035c0 .8-.512 1.248-1.2 1.248s-1.201-.448-1.201-1.248v-8.035zm7.568-1.072c.096-.576.72-1.232 1.568-1.232.801 0 1.424.576 1.601 1.152l1.89 6.338h.031l1.889-6.338c.176-.576.801-1.152 1.6-1.152.85 0 1.473.656 1.57 1.232l1.488 8.932c.016.096.016.191.016.271 0 .704-.512 1.152-1.152 1.152-.816 0-1.137-.368-1.248-1.12l-.945-6.515h-.031l-1.922 6.707c-.111.384-.416.928-1.279.928-.865 0-1.169-.544-1.281-.928l-1.92-6.707h-.033l-.943 6.515c-.113.752-.433 1.12-1.249 1.12-.64 0-1.152-.448-1.152-1.152 0-.08 0-.176.017-.271l1.485-8.932z",["fill"]: "#269",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};