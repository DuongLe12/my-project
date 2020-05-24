import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Input extends Component {
    render() {
        return (
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-sm-8 col-lg-6" style={{border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem', background: '#F1F1F1'}}>
                    {/* Form */}
                    <form className="form-example" action method="post">
                    <h1 className='text-center'>Thêm sản phẩm</h1>
                    {/* Input fields */}
                    <div className="form-group">
                        <label htmlFor="Ten">Tên sản phẩm:</label>
                        <input type="text" className="form-control " placeholder="Nhập tên sản phẩm..."  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="soluong">Số lượng:</label>
                        <input type="number" className="form-control" placeholder="Nhập số lượng..."  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gia">Giá:</label>
                        <input type="number" className="form-control" placeholder="Nhập giá..."  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hinhanh">Hình ảnh:</label>
                        <input type="file" class="form-control-file border" name="file" placeholder="Chọn ảnh..."></input>
                    </div>
                    <div className='text-center mb-3'>
                        <button type="reset" className="btn btn-primary btn-customized mr-2">Reset</button>
                        <Link to='/Sanpham'>
                            <button type="submit" className="btn btn-primary btn-customized ml-2">Lưu</button>
                        </Link>                        
                    </div>
                   
                    {/* End input fields */}
                    </form>
                    {/* Form end */}
                </div>
                </div>


        )
    }
}
