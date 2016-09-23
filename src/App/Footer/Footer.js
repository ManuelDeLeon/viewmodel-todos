Footer({
  render() {
    <div>
      <span>Show: </span>
      <Selection filter="ALL" label="All" />
      , <Selection filter="ACTIVE" label="Active" />
      , <Selection filter="COMPLETED" label="Completed" />
    </div>
  }
})