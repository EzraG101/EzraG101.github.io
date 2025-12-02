// Example (set arxiv as "[PDF]" or "In Progress" if paper is expository)

const paperNum = {
  title: "Paper Title",
  arxiv: "arXiv:####.#####",
  link: "https://website.com/paper",
  description: "Math blah blah \\(math \\ne 7\\)",
};

// List of papers below.

// On paper addition, make a new JavaScript object as above.
// Add paperNum to FRONT of research_papers or exposit_papers for it to be visible.
// You can crtl + f to find these ^

// psst don't forget the comma after every attribute ;)

const paper5 = {
  title: "An Overview of the Arf Invariant",
  arxiv: "In Progress",
  link: "",
  description: "to be completed later",
};

const paper4 = {
  title: "The Rectifiability Theorem for Varifolds",
  arxiv: "[PDF]",
  link: "papers/20250512.pdf",
  description: "to be completed later",
};

const paper3 = {
  title: "Applications of Morse Theory to Algebraic Topology",
  arxiv: "[PDF]",
  link: "papers/20250506.pdf",
  description: "to be completed later",
};

const paper2 = {
  title: "Constructing Braid Invariants via Representations",
  arxiv: "[PDF]",
  link: "papers/20241208.pdf",
  description: "to be completed later",
};

const paper1 = {
  title:
    "Simple eigenvalues and non-vanishing eigenvectors of the Anderson model",
  arxiv: "arXiv:2512.00278",
  link: "http://arxiv.org/abs/2512.00278",
  description: "to be completed later",
};

// Add HERE

const research_papers = [paper1];
const exposit_papers = [paper2, paper3, paper4, paper5];
