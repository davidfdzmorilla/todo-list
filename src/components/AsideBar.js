

import { AddForm } from './AddForm'
import { SearchForm } from './SearchForm'
import './AsideBar.css'

export const AsideBar = ({ list, setList }) => {
  return (
    <aside>
      <SearchForm list={list} setList={setList} />
      <hr />
      <AddForm list={list} setList={setList} />
    </aside>
  )
}
