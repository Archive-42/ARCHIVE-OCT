"""djorg URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# day 4 mvp completed will work on stretch tomorrow
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.authtoken import views
from rest_framework import routers
from notes.api import PersonalNoteViewSet
from polls.api import QuestionViewSet

router = routers.DefaultRouter()
router.register(r"notes", PersonalNoteViewSet)
router.register(r"questions", QuestionViewSet)

urlpatterns = [
    path("polls/", include("polls.urls")),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    re_path(r"^api-token-auth/", views.obtain_auth_token),
]
