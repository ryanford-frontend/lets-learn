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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#DD2E44",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M8.523 17.084c-.416 0-.65-.364-.65-.78 0-.416.234-.78.65-.78h4.394V13.73H9.433c-.468 0-.65-.338-.65-.78 0-.416.234-.754.65-.754h3.484v-1.222c0-.468.338-.702.858-.702.546 0 .858.234.858.702v1.222h3.588c.416 0 .65.338.65.754 0 .442-.182.78-.65.78h-3.588v1.794h4.265c.39 0 .649.364.649.78 0 .416-.26.78-.649.78h-4.265v1.846h5.616c.39 0 .624.339.624.807 0 .416-.234.78-.624.78H6.937c-.416 0-.624-.364-.624-.78 0-.468.208-.807.624-.807h5.98v-1.846H8.523zm10.4-8.917c1.378 0 2.028.572 2.028 1.976v1.69c0 .572-.363.78-.91.78-.546 0-.884-.234-.884-.702v-1.456c0-.52-.26-.65-.728-.65H9.121c-.494 0-.729.13-.729.65v1.742c0 .468-.416.727-.936.727-.521 0-.91-.234-.91-.806v-1.976c0-1.404.65-1.976 2.028-1.976h4.238V6.762c0-.468.39-.728.988-.728.624 0 1.014.26 1.014.728v1.404h4.109zm-1.638 14.015c1.456 0 2.08.546 2.08 1.976v3.433c0 1.43-.624 1.976-2.08 1.976h-7.202c-1.456 0-2.106-.546-2.106-1.976v-3.433c0-1.43.65-1.976 2.106-1.976h7.202zm-.598 5.772c.494 0 .728-.131.728-.625v-2.912c0-.52-.234-.649-.728-.649h-6.032c-.494 0-.728.13-.728.649v2.912c0 .494.234.625.728.625h6.032zm7.67-4.602c0 .494-.416.727-.988.727-.546 0-.988-.26-.988-.727V8.4c0-.494.442-.728.988-.728.572 0 .988.26.988.728v14.952zm4.889 4.03c0 1.69-.858 2.47-2.887 2.47-.832 0-2.002-.078-2.73-.233-.363-.078-.623-.416-.623-.858 0-.104 0-.183.025-.286.104-.52.416-.78.807-.78.052 0 .129 0 .182.026.598.13 1.508.234 2.08.234.988 0 1.17-.183 1.17-1.041V7.1c0-.494.39-.78.988-.78s.988.286.988.78v20.282z", {["fill"]: "#FFF",["d"]: "M8.523 17.084c-.416 0-.65-.364-.65-.78 0-.416.234-.78.65-.78h4.394V13.73H9.433c-.468 0-.65-.338-.65-.78 0-.416.234-.754.65-.754h3.484v-1.222c0-.468.338-.702.858-.702.546 0 .858.234.858.702v1.222h3.588c.416 0 .65.338.65.754 0 .442-.182.78-.65.78h-3.588v1.794h4.265c.39 0 .649.364.649.78 0 .416-.26.78-.649.78h-4.265v1.846h5.616c.39 0 .624.339.624.807 0 .416-.234.78-.624.78H6.937c-.416 0-.624-.364-.624-.78 0-.468.208-.807.624-.807h5.98v-1.846H8.523zm10.4-8.917c1.378 0 2.028.572 2.028 1.976v1.69c0 .572-.363.78-.91.78-.546 0-.884-.234-.884-.702v-1.456c0-.52-.26-.65-.728-.65H9.121c-.494 0-.729.13-.729.65v1.742c0 .468-.416.727-.936.727-.521 0-.91-.234-.91-.806v-1.976c0-1.404.65-1.976 2.028-1.976h4.238V6.762c0-.468.39-.728.988-.728.624 0 1.014.26 1.014.728v1.404h4.109zm-1.638 14.015c1.456 0 2.08.546 2.08 1.976v3.433c0 1.43-.624 1.976-2.08 1.976h-7.202c-1.456 0-2.106-.546-2.106-1.976v-3.433c0-1.43.65-1.976 2.106-1.976h7.202zm-.598 5.772c.494 0 .728-.131.728-.625v-2.912c0-.52-.234-.649-.728-.649h-6.032c-.494 0-.728.13-.728.649v2.912c0 .494.234.625.728.625h6.032zm7.67-4.602c0 .494-.416.727-.988.727-.546 0-.988-.26-.988-.727V8.4c0-.494.442-.728.988-.728.572 0 .988.26.988.728v14.952zm4.889 4.03c0 1.69-.858 2.47-2.887 2.47-.832 0-2.002-.078-2.73-.233-.363-.078-.623-.416-.623-.858 0-.104 0-.183.025-.286.104-.52.416-.78.807-.78.052 0 .129 0 .182.026.598.13 1.508.234 2.08.234.988 0 1.17-.183 1.17-1.041V7.1c0-.494.39-.78.988-.78s.988.286.988.78v20.282z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};