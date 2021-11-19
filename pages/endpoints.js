import EndpointResultViewer from "../components/EndpointResultViewer";

const Page = () => {
    return (
        <section className="flex flex-row flex-wrap mx-auto">
            <EndpointResultViewer path="/quotes" />
            <EndpointResultViewer path="/average" />
            <EndpointResultViewer path="/slippage" />
        </section>
    );
}

export default Page;