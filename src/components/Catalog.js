import { CatalogItem } from './CatalogItem';

export const Catalog = ({
    posts,
}) => {
    return (
        <section id="catalog-page">
            <div className='conatiner'>
                <div className='row justify-content-center gap-3 py-5 flex-column flex-lg-row m-0'>

                    {posts.map(x =>
                        <CatalogItem key={x._id} {...x} />
                    )}


                    {posts.length === 0 && (
                        < h2 className='text-center pt-5'>No adventures yet...</h2>
                    )
                    }
                </div>
            </div>
        </section >
    )
}