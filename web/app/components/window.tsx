import {ComponentProps} from "react";

const Window = (props: ComponentProps<any>) => {
    return(
        <div
            className={"border-2 border-gray-800 sm:relative flex flex-col rounded-lg px-2 min-h-64 " + props.className}>
            <h1 className="text-gray-500">{props.title}</h1>
            <div className="h-full">{props.children}</div>
        </div>

    )
}

export default Window;