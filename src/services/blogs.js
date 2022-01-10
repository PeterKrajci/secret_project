// add code here
const getBlogById = async (req, res) => {
  try {
    const idOfBlog = req.params.id;

    const blog = await Adventure.findById(idOfBlog).exec();

    res.status(200).send(blog);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong!");
  }
};

export default { getBlogById };
