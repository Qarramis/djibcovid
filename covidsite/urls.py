from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]