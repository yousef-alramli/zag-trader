import React, { useEffect, useRef, useState } from 'react'
import useHttp from '../custom-hooks/useHttp';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../redux/contentReducer';
import ContentActionsModal from './ContentActionsModal';

import '../styles/dataManager.scss'

const DataManager = ({ apiContent }) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.value);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const editIndex = useRef(null)
  const editData = useRef(null)
  const http = useHttp({ url: apiContent.url });

  useEffect(() => {
    handleSettingContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSettingContent = async () => {
    const res = await http({ url: apiContent.url, method: 'get' });
    dispatch(setContent(res.data));
  }

  const onEdit = (data, index) => {
    editData.current = { ...data, company: data?.company?.name };
    editIndex.current = index;
    setOpenEditModal(true);
  }

  const handleCreate = async (body) => {
    if (body.company) {
      body.company = { name: body.company }
    }
    await http({ url: apiContent.url, method: 'post', data: body });
    dispatch(setContent([body, ...content]));
    setOpenCreateModal(false);
  }

  const handleEdit = async (body) => {
    if (body.company) {
      body.company = { name: body.company }
    }
    await http({ url: `${apiContent.url}/${editData.current.id}`, method: 'put', data: body });

    let updatedContent = [...content]
    updatedContent[editIndex.current] = body;
    dispatch(setContent(updatedContent));
    setOpenEditModal(false);
  }

  const handleDelete = async (id, index) => {
    await http({ url: `${apiContent.url}/${id}`, method: 'delete' });
    let updatedContent = [...content]
    updatedContent.splice(index, 1);
    dispatch(setContent(updatedContent));
  }

  return (
    <div className='data-manager'>
      <button className='button add' onClick={() => setOpenCreateModal(true)}>Add {apiContent.name}</button>

      <DataTable
        onEdit={onEdit}
        onDelete={handleDelete}
        columns={apiContent.columns}
      />

      <ContentActionsModal
        title={`Create ${apiContent.name}`}
        columns={apiContent.columns}
        initialValues={apiContent.emptyState}
        isOpen={openCreateModal}
        setOpen={setOpenCreateModal}
        onSubmit={handleCreate}
      />

      <ContentActionsModal
        title={`Edit ${apiContent.name}`}
        columns={apiContent.columns}
        initialValues={editData.current}
        isOpen={openEditModal}
        setOpen={setOpenEditModal}
        onSubmit={handleEdit}
      />
    </div>
  )
}

export default DataManager;
