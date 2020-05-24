import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Sanpham extends Component {
    render() {
        return (
            
              <div className="container">
                    <div style={{background: '#F1F1F1'}}>
                    <div className="d-flex flex-row-reverse mb-2">
                        <Link to='/Input'>
                            <button type="button" className="btn btn-primary">Thêm</button>
                        </Link>
                    
                    </div>   
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className='col-md-1'>id</th>
                            <th className='col-md-2'>Tên</th>
                            <th className='col-md-2'>Số lượng</th>
                            <th className='col-md-2'>Giá</th>
                            <th className='col-md-2'> Hình ảnh</th>
                            <th className='col-md-2'>thao tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>oppo</td>
                            <td>111111</td>
                            <td>1</td>
                            <td>
                                <img src='../../img/gt1.jpg'></img>

                            </td>
                            <td className='flex flex-colum'>
                                <button type='button'  class="btn btn-primary text-center ml-2">Sửa</button>
                                <button type='button'  class="btn btn-primary text-center ml-2">Xóa</button>
                            </td>
                        </tr>                        
                        </tbody>
                    </table>
                    </div>
                </div>
        )
    }
}
