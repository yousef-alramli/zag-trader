import React, { useEffect, useRef, useState } from 'react'
import useHttp from '../custom-hooks/useHttp';
import DataTable from './DataTable';
import { POSTS_API, USERS_API } from '../constants/data.const';
import { useDispatch } from 'react-redux';
import { setContent } from '../redux/contentReducer';
import EditContentModal from './EditContentModal';

import '../styles/dataManager.scss'

const DataManager = () => {
  const dispatch = useDispatch();

  const [apiContent, setApiContent] = useState(USERS_API);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const editId = useRef(null)
  const http = useHttp({ url: apiContent.url });

  useEffect(() => {
    handleSettingContent();
  }, [apiContent]);

  const handleSettingContent = async () => {
    const res = await http({ url: apiContent.url, method: 'get' });
    dispatch(setContent(res.data));
  }


  const onEdit = (id) => {
    editId.current = id
    setOpenEditModal(true);
  }

  const handleCreate = async (body) => {
    if (body.company) {
      body.company = { name: body.company }
    }
    await http({ url: apiContent.url, method: 'post', data: body });
    setOpenCreateModal(false);
  }

  const handleEdit = async (body) => {
    if (body.company) {
      body.company = { name: body.company }
    }
    await http({ url: `${apiContent.url}/${editId.current}`, method: 'put', data: body });
    setOpenEditModal(false);
  }

  const handleDelete = async (id) => {
    await http({ url: `${apiContent.url}/${id}`, method: 'delete' });
  }

  return (
    <div className='data-manager'>
      <button className='button add' onClick={() => setOpenCreateModal(true)}>Add {apiContent.name}</button>
      <div>
        <button className='button users' onClick={() => setApiContent(USERS_API)}>Users</button>
        <button className='button' onClick={() => setApiContent(POSTS_API)}>Posts</button>
      </div>

      <DataTable
        onEdit={onEdit}
        onDelete={handleDelete}
        columns={apiContent.columns}
      />
      <EditContentModal
        contentName={apiContent.name}
        columns={apiContent.columns}
        isOpen={openEditModal || openCreateModal}
        setOpen={openCreateModal ? setOpenCreateModal : setOpenEditModal}
        onSubmit={openCreateModal ? handleCreate : handleEdit}
      />
    </div>
  )
}

export default DataManager;
