export default (blogs, { text, sortBy }) => {
  return blogs.filter((blog) => {

    if(sortBy ==='title'){
     const textMatchInTitle = blog.title.toLowerCase().includes(text.toLowerCase());
      return textMatchInTitle;

    } else {
     const textMatchInDescription = (blog.description.toLowerCase().includes(text.toLowerCase()));
      return textMatchInDescription;
    }

  }).sort((a, b) => {
    if (sortBy === 'title') {
      return a.title < b.title ? 1 : -1;
    } else if (sortBy === 'description') {
      return a.description < b.description ? 1 : -1;
    }
  });
};
