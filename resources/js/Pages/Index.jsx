export default function Index({ authors }) {
    return (
        <>
            <h1>My Super Blog</h1>
            <hr/>
            { authors && author.map( (item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                </div>
            )) }
        </>
    )
}