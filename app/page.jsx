import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Posts on programming and web development</span>
    </h1>
    <p className='desc text-center'>
      This website is an open-source sharing platform for the modern world to
      discover, create and share creative posts on programming and web development
    </p>

    <Feed />
  </section>
);

export default Home;
