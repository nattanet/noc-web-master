
 
<script type="text/babel">
    @* Here we will create React component *@
 
    @* 1. Paging component *@
    var GridPager = React.createClass({
        render : function(){
            var li = [];
            var pageCount = this.props.Size;
            for(var i = 1; i <=pageCount; i++){
                if(this.props.currentPage == i){
                    li.push(<li key={i} className="active"><a href="#">{i}</a></li>);
                }
                else{
                    li.push(<li key={i} ><a href="#" onClick={this.props.onPageChanged.bind(null,i)}>{i}</a></li>);
                }
            }
            return (<ul className="pagination">{li}</ul>);
        }
    });
   
    
    @* 2. Table row component *@
   var EmployeeGridRow = React.createClass({
        render : function(){
            return (
                <tr>
                    <td>{this.props.item.FirstName}</td>
                    <td>{this.props.item.LastName}</td>
                    <td>{this.props.item.EmailID}</td>
                    <td>{this.props.item.Country}</td>
                    <td>{this.props.item.City}</td>
                </tr>
            );
        }
    });
    @* 3. Table component *@
    var EmployeeGridTable = React.createClass({
        getInitialState : function(){
            return {
                Data : {
                    List : [],
                    totalPage : 0,
                    sortColumnName : null,
                    sortOrder : null,
                    currentPage : 1,
                    pageSize : 3
                }
            }
        },
        componentDidMount : function(){
            this.populateData();
        },
        @* function for populate data *@
        populateData: function(){
            var params = {
                pageSize : this.state.Data.pageSize,
                currentPage : this.state.Data.currentPage
            }
            if(this.state.Data.sortColumnName){
                params.sortColumnName = this.state.Data.sortColumnName;
            }
            if(this.state.Data.sortOrder){
                params.sortOrder = this.state.Data.sortOrder;
            }
 
            $.ajax({
                url : this.props.dataUrl,
                type : 'GET',
                data : params,
                success : function(data){
                    if(this.isMounted()){
                        this.setState({
                            Data : data
                        });
                    }
                }.bind(this),
                error: function(err){
                    alert('Error');
                }.bind(this)
            });
        },
       
        pageChanged:function(pageNumber,e){
            e.preventDefault();
            this.state.Data.currentPage = pageNumber;
            this.populateData();
        },
      
        sortChanged : function(sortColumnName, order , e){
            e.preventDefault();
            this.state.Data.sortColumnName = sortColumnName;
            this.state.Data.currentPage = 1;
            this.state.Data.sortOrder = order.toString().toLowerCase() == 'asc' ? 'desc':'asc';
            this.populateData();
        },
      
        _sortClass : function(filterName){
            return "fa fa-fw " + ((filterName == this.state.Data.sortColumnName) ? ("fa-sort-" + this.state.Data.sortOrder) : "fa-sort");
        },
        @* render *@
        render : function(){
            var rows = [];
            this.state.Data.List.forEach(function(item){
                rows.push(<EmployeeGridRow key={item.EmployeeID} item={item}/>);
            });
            return (
                <div>
                    <table className="table table-responsive table-bordered">
                        <thead>
                            <tr>
                                <th onClick={this.sortChanged.bind(this,'FirstName',this.state.Data.sortOrder)}>First Name
                                    <i className={this._sortClass('FirstName')}></i></th>
                                <th onClick={this.sortChanged.bind(this,'LastName',this.state.Data.sortOrder)}>
                                    Last Name
                                    <i className={this._sortClass('LastName')}></i></th>
                                <th onClick={this.sortChanged.bind(this,'EmailID',this.state.Data.sortOrder)}>
                                    Email
                                    <i className={this._sortClass('EmailID')}></i>
                                </th>
                                <th onClick={this.sortChanged.bind(this,'Country',this.state.Data.sortOrder)}>
                                    Country
                                    <i className={this._sortClass('Country')}></i>
                                </th>
                                <th onClick={this.sortChanged.bind(this,'City',this.state.Data.sortOrder)}>
                                    City
                                    <i className={this._sortClass('City')}></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                    <GridPager Size={this.state.Data.totalPage} onPageChanged={this.pageChanged} currentPage={this.state.Data.currentPage}/>
                </div>
            );
        }
    });
    ReactDOM.render(<EmployeeGridTable dataUrl="/home/getEmployeeList"/>, document.getElementById('griddata'));
</script>
<style>
    #griddata th
    {
        cursor: pointer;
    }
    .fa
    {
        float: right;
        margin-top: 4px;
    }
</style>