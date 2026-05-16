
const DetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id);
    
    return (
        <div>
            details coming soon
        </div>
    );
};

export default DetailsPage;