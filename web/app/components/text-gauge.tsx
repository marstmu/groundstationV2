import {ComponentProps} from "react";

const TextGauge = (props: ComponentProps<any>) => {
    return (
        <div className={props.className + " border-2 p-2 rounded-lg bg-gray-900 flex-auto max-w-56"}>
            <h2 className="absolute -inset-y-0 bg-gray-900 h-fit px-2">{props.title}</h2>
            <p className={props.valueClassName + " text-xl sm:text-4xl text-center sm:text-right"}>{props.value}</p>
        </div>
    );
}

export default TextGauge;