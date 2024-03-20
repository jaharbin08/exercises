$(function () {
  $("#movie-form").on("submit", function (event) {
    event.preventDefault();
    let formInputData = {
      title: $("#movie").val(),
      rating: $("#rating").val(),
    };
    let movieDataHTML = createMovieDataHTML(formInputData);
    $("#movie-table-body").append(movieDataHTML);
    $("#movie-form").trigger("reset");
  });

  $("#movie-table-body").on("click", "button", function () {
    $(this).closest("tr").remove();
  });
});

function createMovieDataHTML(formInputData) {
  return `
    <tr>
      <td>${formInputData.title}</td>
      <td>${formInputData.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${formInputData.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}
