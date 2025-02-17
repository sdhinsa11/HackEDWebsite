import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export const DancingRaj = () => {
    const { RiveComponent } = useRive({
        // Load a local riv `clean_the_car.riv` or upload your own!
        src: "/dancingRaj.riv",
        // Be sure to specify the correct state machine (or animation) name
        stateMachines: "dance",
        // This is optional.Provides additional layout control.
        layout: new Layout({
            fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    // return <RiveComponent />;
    return <RiveComponent style={{ width: "90%", height: "300px" }} />;

};

