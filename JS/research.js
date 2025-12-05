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
  description: "",
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
  description: "In this paper we introduce braids and the braid group. Using tools from linear algebra, we construct representations of the braid group and use them to obtain braid invariants. We conclude with an example of how to use our results to distinguish two particular braids.",
};

const paper1 = {
  title:
    "Simple Eigenvalues and Non-vanishing Eigenvectors of the Anderson Model",
  arxiv: "arXiv:2512.00278",
  link: "http://arxiv.org/abs/2512.00278",
  description: "In this paper, we study spectral conditions on a randomly defined matrix on a graph, \\(G\\). Specifically, we construct a random matrix by adding a diagonal matrix,\\(V\\), with random i.i.d entries to the Laplacian matrix, \\(\\Delta\\), of the graph. We call a \\(V\\) good if \\(\\Delta+tV\\) has simple eigenvalues and non-vanishing eigenvectors for all but finitely many \\(t\\in\\mathbb R\\). Otherwise, we call \\(V\\) bad. We prove results on \\(\\mathbb P(V\\) is good\\()\\) for different probability distributions.",
};

// Add HERE

const research_papers = [paper1];
const exposit_papers = [paper2, paper3, paper4, paper5];
